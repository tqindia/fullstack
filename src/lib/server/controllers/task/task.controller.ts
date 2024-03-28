import { ConnectRouter } from "@connectrpc/connect";
import { TaskService } from "@/cloud/todo/v1/todo_connect";
import {
    CreateTaskRequest,
    UpdateTaskRequest,
    DeleteTaskRequest,
    GetTasksRequest,
    Task_Status,
    Task as TaskResponse,
} from "@/cloud/todo/v1/todo_pb";
import { authContextKey } from "@/lib/server/context/contextKey";
import Task from '@/lib/server/controllers/task/task.entity';

export default (router: ConnectRouter) => router.service(TaskService, {
    async create(req: CreateTaskRequest, context: any) {
        try {
            // Validate input
            if (!req.title || !req.description) {
                throw new Error("Invalid input. Title and description are required.");
            }
            
            // Create task in database
            const task = await Task.create({
                title: req.title,
                description: req.description,
                status: Task_Status.TODO,
                userId: req.userID 
            });

            return {message: "Task created "}; // Return success response
        } catch (error) {
            console.error("Error creating task:", error);
            return { error: "Failed to create task" };
        }
    },
    async update(req: UpdateTaskRequest, context: any) {
        try {
            // Validate input
            if (!req.id || !req.title || !req.description) {
                throw new Error("Invalid input. ID, title, and description are required.");
            }

            // Update task in database
            const [rowsUpdated, updatedTask] = await Task.update({
                title: req.title,
                description: req.description,
                status: req.status || Task_Status.TODO ,
                userId: req.userID,
            }, {
                where: {
                    id: req.id,
                    userId: req.userID // Assuming you have userId in the auth context
                },
                returning: true // Return the updated task
            });

            if (rowsUpdated === 0) {
                throw new Error("Task not found or you don't have permission to update it.");
            }

            return {message: "Task updated "}; // Return success response
        } catch (error) {
            console.error("Error updating task:", error);
            return { error: "Failed to update task" };
        }
    },
    async delete(req: DeleteTaskRequest, context: any) {
        try {
            // Validate input
            if (!req.id) {
                throw new Error("Invalid input. ID is required.");
            }

            // Delete task from database
            const rowsDeleted = await Task.destroy({
                where: {
                    id: req.id,
                }
            });

            if (rowsDeleted === 0) {
                throw new Error("Task not found or you don't have permission to delete it.");
            }

            return {message: "Deleted Task successfully"}; // Return success response
        } catch (error) {
            console.error("Error deleting task:", error);
            return { error: "Failed to delete task" };
        }
    },
    async get(req: GetTasksRequest, context: any) {
        try {
            // Get tasks for the logged-in user
            const userId = req.userID; 
            const tasks = await Task.findAll({
                where: { userId }
            });

            // Convert tasks to protobuf format
            const taskList = tasks.map((task: any) => {
                const t = new TaskResponse()
                t.id = task.id
                t.title = task.title
                t.description = task.description
                t.status = parseInt(task.status)
                return t
            });

            return { tasks: taskList }; // Return tasks
        } catch (error) {
            console.error("Error fetching tasks:", error);
            return { error: "Failed to fetch tasks" };
        }
    }
});

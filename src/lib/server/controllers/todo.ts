import {ConnectRouter} from "@connectrpc/connect";
import {TaskService} from "@/cloud/todo/v1/todo_connect";
import type {CreateTaskRequest, UpdateTaskRequest, DeleteTaskRequest, GetTasksRequest}
from "@/cloud/todo/v1/todo_pb";
import {authContextKey} from "@/lib/server/context/contextKey";
import {loggedInUser} from "@/lib/server/auth/auth";
import {useListTask} from "@/lib/tasks/hooks/use-list-task";
import {useDeleteTask} from "@/lib/tasks/hooks/use-delete-task";
import {useUpdateTask} from "@/lib/tasks/hooks/use-update-task";
import {useCreateTask} from "@/lib/tasks/hooks/use-create-task";

export default(router : ConnectRouter) => router.service(TaskService, {
    async create(req : CreateTaskRequest, context : any) {
        try {
            // Get the logged-in user
            const user = await loggedInUser(context.values.get(authContextKey));

            // Validate input
            if (!req.title || !req.description ) {
                throw new Error("Invalid input. Title and description are required.");
            }

            // Validate title and description length
            if (req.title.length === 0 || req.description.length === 0) {
                throw new Error("Invalid input. Title and description cannot be empty.");
            }

            // Create a new task in Firestore
            await useCreateTask({title: req.title, description: req.description, status: 0, userId: user});

            return {message: `Task created with ID:`};
        } catch (error) {
            console.error("Error creating task:", error);
            return {error: "Failed to create task"};
        }
    },
    async update(req : UpdateTaskRequest, context : any) {
        try {
            // Get the logged-in user
            const user = await loggedInUser(context.values.get(authContextKey));

            // Validate input
            if (!req.id || !req.title || !req.description || !req.status) {
                throw new Error("Invalid input. ID, title, description, and status are required.");
            }


            // Validate title and description length
            if (req.title.length === 0 || req.description.length === 0) {
                throw new Error("Invalid input. Title and description cannot be empty.");
            }

            // Update the task in Firestore
            await useUpdateTask({id: req.id, title: req.title, description: req.description, status: req.status, userId: user});

            return {message: `Task updated with ID: ${req.id}`};
        } catch (error) {
            console.error("Error updating task:", error);
            return {error: "Failed to update task"};
        }
    },
    async delete(req : DeleteTaskRequest) {
        try {
            // Validate input
            if (!req.id) {
                throw new Error("Invalid input. ID is required.");
            }

            // Delete the task from Firestore
            await useDeleteTask(req.id);

            return {message: `Task deleted with ID: ${req.id}`};
        } catch (error) {
            console.error("Error deleting task:", error);
            return {error: "Failed to delete task"};
        }
    },
    async get(req : GetTasksRequest, context : any) {
        try {
            // Get the logged-in user
            const user = await loggedInUser(context.values.get(authContextKey));

            // Get the list of tasks for the user from Firestore
            return await useListTask(user);
        } catch (error) {
            console.error("Error fetching tasks:", error);
            return {error: "Failed to fetch tasks"};
        }
    }
});

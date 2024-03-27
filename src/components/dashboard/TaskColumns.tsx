import React, { useState, useEffect } from 'react';
import { Task } from '@/cloud/todo/v1/todo_pb';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import UpdateTaskDialog from '@/components/dashboard/UpdateTaskDialog';
import { UpdateTaskRequest, DeleteTaskRequest } from '@/cloud/todo/v1/todo_pb';
import apiCloud from '@/services/cloud';
import { toast as reactToast } from 'react-hot-toast';

interface TaskCardProps {
    task: Task;
    id: number;
    handleDelete: (task: Task) => void;
    handleUpdate: (title: string, description: string, status: number, id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, id, handleUpdate, handleDelete }) => {
    const [open, setOpen] = useState(false);

    return (
        <Draggable draggableId={task.id} index={id}>
            {(provided) => (
                <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => setOpen(true)}
                >
                    <UpdateTaskDialog
                        task={task}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        open={open}
                    />
                </li>
            )}
        </Draggable>
    );
};

const getStatusLabel = (status: number): string => {
    switch (status) {
        case 0:
            return 'To Do';
        case 1:
            return 'In Progress';
        case 2:
            return 'Done';
        default:
            return '';
    }
};

interface TaskColumnProps {
    tasks: Task[];
    title: string;
    columnId: string;
    handleUpdate: (title: string, description: string, status: number, id: string) => void;
    handleDelete: (task: Task) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
    tasks,
    title,
    columnId,
    handleUpdate,
    handleDelete,
}) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <Droppable droppableId={columnId} key={title}>
                {(provided) => (
                    <div
                        className="flex flex-col items-center w-96 border border-gray-300 shadow-md p-4 rounded-lg min-h-80"
                    >
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {tasks.length == 0 && (
                                <TaskCard
                                    key={"1"}
                                    id={1}
                                    task={new Task()}
                                    handleUpdate={handleUpdate}
                                    handleDelete={handleDelete}
                                />
                            )}
                            {tasks.map((task, i) => (
                                <TaskCard
                                    key={task.id}
                                    id={i}
                                    task={task}
                                    handleUpdate={handleUpdate}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </Droppable>
        </div>
    );
};

interface TaskColumnsProps {
    tasks: Task[];
    onUpdate: () => void;
}

const TaskColumns: React.FC<TaskColumnsProps> = ({ tasks, onUpdate }) => {
    const [todoTask, setTodoTask] = useState<Task[]>([]);
    const [progressTask, setProgressTask] = useState<Task[]>([]);
    const [doneTask, setDoneTask] = useState<Task[]>([]);

    useEffect(() => {
        const todoTasks = tasks.filter((task) => task.status === 0);
        const progressTasks = tasks.filter((task) => task.status === 1);
        const doneTasks = tasks.filter((task) => task.status === 2);
        setTodoTask(todoTasks);
        setProgressTask(progressTasks);
        setDoneTask(doneTasks);
    }, [tasks]);

    const handleUpdate = (title: string, description: string, status: number, id: string) => {
        const request = new UpdateTaskRequest();
        request.title = title;
        request.description = description;
        request.status = status;
        request.id = id;
        reactToast
            .promise(apiCloud.update(request), {
                loading: 'Updating Tasks',
                success: 'Task Updated Successfully',
                error: 'Something went wrong',
            })
            .then(() => {
                onUpdate();
            });
    };

    const handleDelete = (task: Task) => {
        const request = new DeleteTaskRequest();
        request.id = task.id;
        reactToast
            .promise(apiCloud.delete(request), {
                loading: 'Deleting Tasks',
                success: 'Task Deleted Successfully',
                error: 'Something went wrong',
            })
            .then(() => {
                onUpdate();
            });
    };

    const onDragEnd = (result: any) => {
        const { source, destination } = result;
        console.log(source, destination);
        if (!destination) {
            return;
        }

        if (source.droppableId !== destination.droppableId) {
            const tasksList = tasks.filter((task) => task.status === parseInt(source.droppableId));
            handleUpdate(
                tasksList[source.index].title,
                tasksList[source.index].description,
                parseInt(destination.droppableId),
                tasksList[source.index].id
            );
        }
    };

    return (
        <div className="flex justify-center gap-8">
            <DragDropContext onDragEnd={onDragEnd}>
                <TaskColumn
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    tasks={todoTask}
                    title="To Do"
                    columnId={JSON.stringify(0)}
                />
                <TaskColumn
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    tasks={progressTask}
                    columnId={JSON.stringify(1)}
                    title="Done"
                />
                <TaskColumn
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    tasks={doneTask}
                    columnId={JSON.stringify(2)}
                    title="In Progress"
                />
            </DragDropContext>
        </div>
    );
};

export default TaskColumns;

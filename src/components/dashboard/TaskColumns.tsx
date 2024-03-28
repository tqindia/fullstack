import React, { useEffect, useState } from 'react';
import { Task, Task_Status } from '@/cloud/todo/v1/todo_pb';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskColumn from './TaskColumn';
import { UpdateTaskRequest, DeleteTaskRequest } from '@/cloud/todo/v1/todo_pb';
import apiCloud from '@/services/cloud';
import { toast as reactToast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';

interface TaskColumnsProps {
  tasks: Task[];
  onUpdate: () => void;
}

const TaskColumns: React.FC<TaskColumnsProps> = ({ tasks, onUpdate }) => {
  const { data: session } = useSession();
  const [taskList, setTaskList] = useState<Task[][]>([[], [], []]);

  useEffect(() => {
    const temp: Task[][] = [];
    [Task_Status.TODO, Task_Status.IN_PROGRESS, Task_Status.DONE].map((row, i) => {
      temp[row] = tasks.filter((task) => task.status === row);
    });
    setTaskList(temp);
  }, [tasks]);

  const handleUpdate = (title: string, description: string, status: number, id: string) => {
    // Validate input
    if (!title.trim() || !description.trim()) {
      console.error('Invalid input for update task');
      return;
    }

    const request = new UpdateTaskRequest();
    request.title = title;
    request.description = description;
    request.status = status;
    request.id = id;
    request.userID = session?.user?.email as string;

    reactToast
      .promise(apiCloud.update(request), {
        loading: 'Updating Tasks',
        success: 'Task Updated Successfully',
        error: 'Something went wrong',
      })
      .then(() => {
        onUpdate();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (task: Task) => {
    const request = new DeleteTaskRequest();
    request.id = task.id
    request.userID = session?.user?.email as string

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
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }

    if (source.droppableId != destination.droppableId) {
      const task = tasks.filter((task) => {
        if(task.id === draggableId) {
            return task
        }
      });
      const temp = taskList;
      handleUpdate(task[0].title, task[0].description, parseInt(destination.droppableId), task[0].id);
      temp[destination.droppableId].push(task[0]);
      temp[source.droppableId].splice(source.index, 1)
      setTaskList(temp);
    }
  };

  return (
    <div className="flex justify-center gap-8">
      <DragDropContext onDragEnd={onDragEnd}>
        {tasks.length > 0 &&
          ['TO DO', 'In Progress', 'Done'].map((row, i) => (
            <TaskColumn
              key={i}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              tasks={taskList[i]}
              title={row}
              columnId={JSON.stringify(i)}
            />
          ))}
      </DragDropContext>
    </div>
  );
};

export default TaskColumns;

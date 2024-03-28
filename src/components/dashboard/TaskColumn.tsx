import React from 'react';
import { Task } from '@/cloud/todo/v1/todo_pb';
import { StrictModeDroppable } from '@/components/dashboard/StrictModeDroppable';
import TaskCard from '@/components/dashboard/TaskCard';

interface TaskColumnProps {
  tasks: Task[];
  title: string;
  columnId: string;
  handleUpdate: (title: string, description: string, status: number, id: string) => void;
  handleDelete: (task: Task) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ tasks, title, columnId, handleUpdate, handleDelete }) => {
  return (
    <StrictModeDroppable droppableId={columnId} key={columnId} type="COLUMN" direction="vertical" isCombineEnabled={true}>
      {(provided) => (
        <div
          className="flex flex-col items-center w-96 border border-gray-300 shadow-md p-4 rounded-lg min-h-80"
          {...provided.droppableProps}
          ref={provided.innerRef}
          key={columnId}
        >
          <h2 className="text-lg font-semibold mb-4">{title}</h2>
          <ul>
            {tasks.map((task, i) => (
              <TaskCard
                key={task.id}
                id={i}
                task={task}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            ))}
            {provided.placeholder}
          </ul>
        </div>
      )}
    </StrictModeDroppable>
  );
};

export default TaskColumn;

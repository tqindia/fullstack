import React, { useState } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { Task } from '@/cloud/todo/v1/todo_pb';
import UpdateTaskDialog from '@/components/dashboard/UpdateTaskDialog';

interface TaskCardProps {
  task: Task;
  id: number;
  handleDelete: (task: Task) => void;
  handleUpdate: (title: string, description: string, status: number, id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, id, handleUpdate, handleDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <Draggable draggableId={task.id} index={id} key={task.id}>
      {(provided: DraggableProvided) => (
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
          />
        </li>
      )}
    </Draggable>
  );
};

export default TaskCard;

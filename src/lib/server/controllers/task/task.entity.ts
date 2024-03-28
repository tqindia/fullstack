// db/models/task.model.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '@/lib/server/db/db';

class Task extends Model {}
Task.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('0', '1', '2'),
        defaultValue: '0',
    },
}, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
});

export default Task;
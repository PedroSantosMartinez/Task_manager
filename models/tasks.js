import { DataTypes } from 'sequelize';
import sequelize from '../config/dbconnect.js'

// Tables for tasks

    const Task = sequelize.define('Tasks', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

export default Task;

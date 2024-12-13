import express from 'express';
import Task from '../models/tasks.js';
import sequelize from '../config/dbconnect.js';

const router = express.Router();

// Get all task
router.get('/', async (req, res) => {

    try {

        await sequelize.authenticate();
        await sequelize.async();

        const tasks = await Task.findAll();
        res.json(tasks);

    } catch (error) {
        
        console.error(error.message);
        const text = error.message;
        res.status(500).json({ message: text });
    }
});

// Create a new task   
router.post('/', async (req, res) => {

});  

export default router
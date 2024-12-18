import express from 'express';
import Task from '../models/tasks.js';
import sequelize from '../config/dbconnect.js';

const router = express.Router();

// Get all task
router.get('/tasks', async (req, res) => {

    try {

        await sequelize.authenticate();
        await sequelize.sync();
        const tasks = await Task.findAll();
        res.render('app', { tasks });

    } catch (error) { 
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Create a new task   
router.post('/task', async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = await Task.create({ title, description });
        res.redirect('/tasks'); // Redirect to the tasks page
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

// After authentication take the use to the dashboard
// POST save to the database
// GET return the requested 

export default router;
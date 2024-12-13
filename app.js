import express from "express"; // Import Express workframe 
import taskRoutes from './routes/tasks.js'; // Import task routes
// import path from 'path'; // Import path module
// import { fileURLToPath } for 'url

// const __filename = fileURLToPath(import.meta.url); works just like pwd in terminal
// constm__dirname = path.dirname(__filename);

const app = express(); // Initialize Expres app

app.use(express.json()); 

app.use('view engine', 'ejs'); // Set view engine to ejs

app.use("views", "./views")

// app.use(express.urlencoded({ extended: true })); // Enable parsing of URL-encoded bodies? Figure out how it work for HW.
// app.use(express.json());


// Set the public directory and expected json data response
app.use(express.static('public'))
// app.use('/api', taskRoutes)
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000; // Set port to 3000   Rob set it to 9000 why?

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
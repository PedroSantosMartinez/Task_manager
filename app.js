import express from "express"; // Import Express workframe 
import taskRoutes from './routes/tasks.js'; // Import task routes
import path from 'path'; // Import path module
import { fileURLToPath } from 'url'
import sequelizeConnection from "./config/dbconnect.js";
import cookieParser from "cookie-parser"; // Import cookie-parser middleware
import session from "express-session";
import flash from "connect-flash"


const __filename = fileURLToPath(import.meta.url); //works just like pwd in terminal
const __dirname = path.dirname(__filename);

const app = express(); // Initialize Expres app

app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,

    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours in milliseconds
    }
}));

app.use(flash());

app.use(express.json()); 

// Set the views directory
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));

// Enable parsing of JSON and URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set the public directory and expected json data response
app.use(express.static('public'))
app.use('tasks', taskRoutes);

// Redirect root URL to /tasks
app.get('/tasks', (req, res) => {
    res.send('Hello, World!')
    const tasks = [];
    res.render('app', { tasks: tasks });
});

// Redirect root URL to /tasks
app.get('/', (req, res) => {
    res.redirect('/tasks');
});

// Start server on port 9000
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
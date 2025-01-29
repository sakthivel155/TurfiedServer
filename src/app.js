import express from 'express';
import routes from './routes/index.js';


const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

export default app;
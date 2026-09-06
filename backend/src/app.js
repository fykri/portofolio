import express from 'express';
import cors from 'cors';
import emailRoutes from './email_route.js'

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
        credentials: true,
    }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: 'Portfolio API is running 🚀',
    });
});

app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is healthy',
    });
});

app.use('/api', emailRoutes);

export default app;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middlewares
const corsOptions = {
  origin: [process.env.FRONTEND_URL, 'http://localhost:5173'].filter(Boolean),
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Health-check route
app.get('/', (req, res) => {
  res.json({ message: "She Can Foundation API is running" });
});

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

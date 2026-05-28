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
// app.use(cors());
app.use(cors({
    origin: [
        "http://localhost:5173", // Local testing ke liye
        process.env.FRONTEND_URL // .env file se uthane ke liye (naam wahi rakhna jo tune .env mein diya hai)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
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

import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { fileRouter } from './routes/api.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Add CORS with frontend URL
const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({ origin: frontendURL }));

app.use(express.json());

// API routes
app.use('/api', fileRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Google API Key status:', process.env.GOOGLE_API_KEY ? 'Present' : 'Missing');
  console.log(`Allowed frontend URL: ${frontendURL}`);
});

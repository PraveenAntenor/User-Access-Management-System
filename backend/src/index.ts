import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';
import authRoutes from './routes/auth';
import softwareRoutes from './routes/software';
import requestRoutes from './routes/request';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('✅ Connected to PostgreSQL DB');
    app.use('/api/auth', authRoutes);
    app.use('/api/software', softwareRoutes);
    app.use('/api/requests', requestRoutes);
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ Error connecting to DB:', err));
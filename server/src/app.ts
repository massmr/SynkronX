import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import projectRoutes from './routes/projectRoutes';
import themeRoutes from './routes/themeRoutes';
import affinityRoutes from './routes/affinityRoutes';
import solverRoutes from './routes/solverRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/theme', themeRoutes);
app.use('/api/affinity', affinityRoutes);
app.use('/api/solver', solverRoutes);

export default app;
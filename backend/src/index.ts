import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { createServer } from 'http';

import { router as authRouter } from './routes/auth';
import { router as preferencesRouter } from './routes/preferences';
import { router as propertiesRouter } from './routes/properties';
import { router as requirementsRouter } from './routes/requirements';
import { router as listingsRouter } from './routes/listings';
import teamRequestsRouter from './routes/teamRequests';
import { router as chatRouter } from './routes/chat';
import { initializeSocket } from './socket';

const app = express();
const httpServer = createServer(app);

// CORS must be configured before Socket.IO initialization
app.use(cors({ 
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Initialize Socket.io (must be after CORS)
const io = initializeSocket(httpServer);

app.use(helmet({
  crossOriginEmbedderPolicy: false, // Allow Socket.IO
}));
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api/auth', authRouter);
app.use('/api/preferences', preferencesRouter);
app.use('/api/properties', propertiesRouter);
app.use('/api/requirements', requirementsRouter);
app.use('/api/listings', listingsRouter);
app.use('/api/team-requests', teamRequestsRouter);
app.use('/api/chat', chatRouter);

const port = Number(process.env.PORT || 4000);
httpServer.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
  console.log(`WebSocket server ready on ws://localhost:${port}`);
});



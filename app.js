import express from 'express';
const app = express();

// packages
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';

// routers
import authRouter from './src/routes/authRoute.js';

app.use(cookieParser());
app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);
 
export default app;
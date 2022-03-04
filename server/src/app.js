import express from 'express';
import logger from 'morgan';
import dotEnv from 'dotenv';
import api from './apis';

dotEnv.config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enabling CORS for browser clients
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

api(app);

export default app;

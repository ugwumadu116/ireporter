import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import redflagRoutes from './api/routes/redflagRoutes';
import interventionRoutes from './api/routes/interventionRoutes';
import userRoutes from './api/routes/userRoutes';
import adminRoutes from './api/routes/adminRoutes';

const app = express();
const prefix = '/api/v1';

app.use(cors());
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'x-auth-token');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    res.status(200).json({});
  }
  next();
});


app.use(`${prefix}/red-flags`, redflagRoutes);
app.use(`${prefix}/intervention`, interventionRoutes);
app.use(`${prefix}/user`, userRoutes);
app.use(`${prefix}/admin`, adminRoutes);


app.use((req, res, next) => {
  const error = new Error('Not Found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
export default app;
// peace

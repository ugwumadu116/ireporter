import express from 'express';
import userRouter from './routes/userRoutes'
const app = express();

const port = process.env.PORT || 3002;

app.use('/api/v1/auth/', userRouter)

app.listen(port, () => {
  console.log('listening on ', port);
});

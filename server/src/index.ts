import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

// app.use((_req: Request, res: Response) => {
//   res.send('Hello World');
// });

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create
// Get All
// Get One
// Update
// Delete
app.use('/api', routes);

app.post('/todo', async (req, res) => {
  try {
    res.send(req.body);
  } catch (err) {
    console.error(err);
  }
});

// Starting Server
app.listen(PORT, () => {
  console.log(`App Listening at : http://localhost:${PORT}`);
});

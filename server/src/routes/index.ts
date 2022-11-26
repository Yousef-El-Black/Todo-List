import { Router } from 'express';
import todosRoutes from './api/todo';

const routes = Router();

routes.use('/todos', todosRoutes);

export default routes;

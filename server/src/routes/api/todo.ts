import controllers from '../../controllers/todo';
import express from 'express';

const routes = express.Router();

routes
  .route('/')
  .post(controllers.createOne)
  .get(controllers.showAll)
  .put(controllers.updateOne);
routes.route('/:id').get(controllers.showOne).delete(controllers.deleteOne);

export default routes;

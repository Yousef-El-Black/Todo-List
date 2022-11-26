import { NextFunction, Request, Response } from 'express';
import TodoModel from '../models/todo';

const todoModel = new TodoModel();

// Create Todo
const createOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoModel.create(req.body);
    res.json({
      status: 'success',
      data: { ...todo },
    });
  } catch (err) {
    next(err);
  }
};

// Show All Todos
const showAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todos = await todoModel.index();
    res.json({
      status: 'success',
      data: { todos },
    });
  } catch (err) {
    next(err);
  }
};

// Get a Todo by Id
const showOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoModel.show(req.params.id as unknown as number);
    res.json({
      status: 'success',
      data: { ...todo },
    });
  } catch (err) {
    next(err);
  }
};

// Update a Todo by Id
const updateOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoModel.update(req.body);
    res.json({
      status: 'success',
      data: { ...todo },
    });
  } catch (err) {
    next(err);
  }
};

// Delete a Todo by Id
const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await todoModel.delete(req.params.id as unknown as number);
    res.json({
      status: 'success',
      data: { ...todo },
    });
  } catch (err) {
    next(err);
  }
};

export default { createOne, showAll, showOne, updateOne, deleteOne };

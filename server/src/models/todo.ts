import db from '../database';
import Todo from '../types/todo';

class TodoModel {
  // Create Todo
  async create(todo: Todo): Promise<Todo> {
    try {
      const conn = await db.connect();
      const sql =
        'INSERT INTO todo (description) VALUES ($1) RETURNING todo_id, description;';
      const result = await conn.query(sql, [todo.description]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Unable to Create (${todo.id}): ${err as Error} Message`);
    }
  }

  // Get All Todos
  async index(): Promise<Todo[]> {
    try {
      const conn = await db.connect();
      const sql = 'SELECT * FROM todo;';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Unable to Show Todos: ${err as Error} Message`);
    }
  }

  // Get a Todo by Id
  async show(id: number): Promise<Todo> {
    try {
      const conn = await db.connect();
      const sql = 'SELECT * FROM todo WHERE todo_id=$1;';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Unable to Get ${id} Todo: ${err as Error} Message`);
    }
  }

  // Update a Todo by Id
  async update(todo: Todo): Promise<Todo> {
    try {
      const conn = await db.connect();
      const sql =
        'UPDATE todo SET description=$2 WHERE todo_id=$1 RETURNING *;';
      const result = await conn.query(sql, [todo.id, todo.description]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(
        `Unable to Update ${todo.id} Todo: ${err as Error} Message`
      );
    }
  }

  // Delete a Todo by Id
  async delete(id: number): Promise<Todo> {
    try {
      const conn = await db.connect();
      const sql = 'DELETE FROM todo WHERE todo_id=$1 RETURNING *;';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Unable to Delete ${id} Todo: ${err as Error} Message`);
    }
  }
}

export default TodoModel;

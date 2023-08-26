/* 
 todos - REST

- GET       /api/todo 
- POST      /api/todo  (create a todo)
- PUT       /api/todo  (update)

- DELETE    /api/todo/:id (delete todo by id) 
- GET       /api/todo/:id (get todo by id)


*/

import { NextApiRequest, NextApiResponse } from "next";

const todos = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return getAllTodos(res);
  } else if (req.method === "POST") {
    const newTodo = { id: todos.length + 1, name: req.body.name };

    createTodo(res, newTodo);
    todos.push(newTodo);

    res.status(201).json(newTodo);
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

function getAllTodos(res: NextApiResponse) {
  return res.status(200).json(todos);
}

function createTodo(
  res: NextApiResponse,
  newTodo: { id: number; name: string }
) {
  //Todo:prisma create todo
  let todo;
  return res.status(200).json(todo);
}

import { NextApiRequest, NextApiResponse } from "next";

const todos = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { id } = req.query;
    const todoId = parseInt(id as string, 10);

    return getTodoById(res, todoId);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    const todoId = parseInt(id as string, 10);

    return deleteTodoById(res, todoId);
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const todoId = parseInt(id as string, 10);

    return updateTodo(res, todoId);
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

function getTodoById(res: NextApiResponse, todoId: number) {
  const todo = todos.find((todo) => todo.id === todoId);
  return res.status(405).json(todo);
}

function deleteTodoById(res: NextApiResponse, todoId: number) {
  //Tod: prisma
  const todo = todos.find((todo) => todo.id === todoId);
  return res.status(405).json({ message: "Successfully deleted todo" });
}

function updateTodo(res: NextApiResponse, todoId: number) {
  //Tod: prisma
  const todo = todos.find((todo) => todo.id === todoId);
  return res.status(200).json(todo);
}

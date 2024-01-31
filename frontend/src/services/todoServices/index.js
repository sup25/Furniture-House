import connectDB from "@/config/db";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "@/controller/toDoController";

connectDB();

export const handleTodosRequest = async (req, res) => {
  if (req.method === "GET") {
    // Fetch todos
    const todos = await getTodos();
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const newTodo = await createTodo(req.body);
    res.status(201).json(newTodo);
  } else if (req.method === "PUT") {
    // Update a todo
    const { todoId, updatedTodo } = req.body;
    const success = await updateTodo(todoId, updatedTodo);
    res.status(success ? 200 : 404).json({ success });
  } else if (req.method === "DELETE") {
    // Delete a todo
    const { todoId } = req.body;
    const success = await deleteTodo(todoId);
    res.status(success ? 200 : 404).json({ success });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

import Todo from "@/collectionTodo";

export const createTodo = async (todoData) => {
  try {
    const todo = await Todo.create(todoData);
    return todo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

export const getTodos = async () => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const updateTodo = async (todoId, updatedTodo) => {
  try {
    const result = await Todo.updateOne({ _id: todoId }, updatedTodo);
    return result.nModified > 0;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const result = await Todo.deleteOne({ _id: todoId });
    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

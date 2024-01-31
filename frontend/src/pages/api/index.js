import { handleTodosRequest } from "@/services/todoServices";

export default async function handler(req, res) {
  await handleTodosRequest(req, res);
}

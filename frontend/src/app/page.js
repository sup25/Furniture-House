"use client";

import { Form } from "./components/Input";
import { handleTodosRequest } from "@/services/todoServices";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await handleTodosRequest({ method: "GET" });
      setTodos(response);
    };

    fetchTodos();
  }, []);

  return (
    <div className="section min-h-screen">
      <div className="container flex flex-col w-full items-center justify-center ">
        <h1>CRUD PROJECT</h1>
        <div className="flex flex-col items-center justify-center flex-wrap w-full gap-5">
          <h2>Perform basic curd operation here</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}

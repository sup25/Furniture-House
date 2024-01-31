"use client";

import { useState } from "react";

export const Form = () => {
  const [task, setTask] = useState("");
  const handleSave = async () => {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: task, completed: false }),
    });

    if (response.ok) {
      console.log("Task saved successfully!");
    } else {
      console.error("Error saving task:", response.statusText);
    }
  };

  return (
    <div className="section">
      <div className="container flex w-full justify-center">
        <div className="flex flex-col w-1/2 bg-teal-400 p-2">
          <div className="relative w-full">
            <input
              className="p-2 outline-none w-full "
              placeholder="input your task "
              value={task}
              onChange={(e) => setTask(e.target.value)}
            ></input>
            <div className="absolute right-2 top-2 w-16 ">
              <h2
                className="text-sm p-1 cursor-pointer text-center bg-green-500 text-white rounded"
                onClick={handleSave}
              >
                Save
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

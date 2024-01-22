"use client";
import React from "react";

export const Form = () => {
  return (
    <div className="section">
      <div className="container flex w-full justify-center">
        <div className="flex flex-col w-1/2 bg-teal-400 p-2">
          <div className="relative w-full">
            <input
              className="p-2 outline-none w-full "
              placeholder="input your task "
            ></input>
            <div className="absolute right-2 top-2 w-16 ">
              <h2 className="text-sm p-1 cursor-pointer text-center bg-green-500 text-white rounded">
                Save
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

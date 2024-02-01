"use client";

import React, { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        onChnage={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <input
        onChnage={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <button className="bg-green-600 uppercase font-bold text-white py-3 px-6 w-fit hover:bg-green-500">
        {" "}
        Add Topic
      </button>
    </form>
  );
}

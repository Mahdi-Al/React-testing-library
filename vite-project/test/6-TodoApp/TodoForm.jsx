import React, { useState } from "react";

export default function TodoForm({ setTodoData }) {
  const [inputData, setInputData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodoData((todos) => {
      return [...todos, inputData];
    });

    setInputData("");
  };

  return (
    <form data-testid="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="write a todo"
        required
      />
      <button>Add Todo</button>
    </form>
  );
}

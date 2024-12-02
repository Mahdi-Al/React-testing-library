import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const [todoData, setTodoData] = useState([]);
  return (
    <section>
      <TodoForm setTodoData={setTodoData} />
      <br />
      <br />
      <TodoList todoData={todoData} />
    </section>
  );
}

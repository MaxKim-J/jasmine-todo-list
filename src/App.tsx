import React, { useState } from "react";
import TodoTitle from "./components/TodoTitle";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./@types/todo";
import "./style/app.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (content: string): void => {
    const newTodo: Todo = {
      id: todos.length,
      content: content,
      isChecked: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number): void => {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const checkTodo = (id: number): void => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <TodoTitle />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} />
    </div>
  );
}

export default App;

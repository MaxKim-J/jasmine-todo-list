import React from "react";
import Todo from "../@types/todo";
import TodoSection from "./TodoSection";

interface TodoListProps {
  removeTodo: (id: number) => void;
  checkTodo: (id: number) => void;
  todos: Todo[];
}

function TodoList({ todos, checkTodo, removeTodo }: TodoListProps) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoSection
          key={todo.id}
          removeTodo={removeTodo}
          checkTodo={checkTodo}
          id={todo.id}
          content={todo.content}
          isChecked={todo.isChecked}
        />
      ))}
    </div>
  );
}

export default TodoList;

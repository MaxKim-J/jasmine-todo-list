import React from "react";
import "../style/todoSection.css";

interface TodoProps {
  removeTodo: (id: number) => void;
  checkTodo: (id: number) => void;
  id: number;
  content: string;
  isChecked: boolean;
}

function TodoSection({
  removeTodo,
  checkTodo,
  content,
  isChecked,
  id,
}: TodoProps) {
  return (
    <div className="todo">
      <span
        className={isChecked ? "todo-content todo-checked" : "todo-content"}
        onClick={() => checkTodo(id)}
      >
        {content}
      </span>
      <span className="todo-remove-btn" onClick={() => removeTodo(id)}>
        X
      </span>
    </div>
  );
}

export default TodoSection;

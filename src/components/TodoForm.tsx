import React, { useState } from "react";
import "../style/todoForm.css";

interface TodoFormProps {
  addTodo: (content: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [inputText, setInputText] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    addTodo(inputText);
  };

  return (
    <div className="todo-form">
      <input
        className="todo-form-input"
        onChange={(e) => handleInput(e)}
        type="text"
        placeholder="할 일을 입력해 주세요."
      />
      <button className="todo-form-btn" onClick={handleSubmit}>
        확인
      </button>
    </div>
  );
}

export default TodoForm;

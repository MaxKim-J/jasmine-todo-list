import React, { useState } from "react";
import "../style/todoForm.css";

interface TodoFormProps {
  addTodo: (content: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [inputText, setInputText] = useState<string>("");

  const handleSubmit = () => {
    addTodo(inputText);
    setInputText("");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const handleKeySubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="todo-form">
      <input
        className="todo-form-input"
        type="text"
        placeholder="할 일을 입력해 주세요."
        value={inputText}
        onChange={handleInput}
        onKeyPress={handleKeySubmit}
      />
      <button className="todo-form-btn" onClick={handleSubmit}>
        확인
      </button>
    </div>
  );
}

export default TodoForm;

import React from "react";
import Todo from "../@types/todo";

interface TodoListProps {
  removeTodo: (id: number) => void;
  checkTodo: (id: number) => void;
  todos: Todo[];
}

function TodoList({ todos, checkTodo, removeTodo }: TodoListProps) {
  return <div className="todo-list">투두리스트 리스트</div>;
}

export default TodoList;

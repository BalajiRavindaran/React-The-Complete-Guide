import React, { useState } from "react";
import TodoClass from "../Models/todo";

type TodosContextObj = {
  items: TodoClass[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
  const [todos, setTodos] = useState<TodoClass[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prev) => {
      return [...prev, new TodoClass(todoText)];
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>;
};

export default TodoContextProvider;

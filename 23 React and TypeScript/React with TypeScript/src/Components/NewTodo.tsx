import React, { useRef, useContext } from "react";
import { TodoContext } from "../store/todo-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const ctx = useContext(TodoContext);

  const todoInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    ctx.addTodo(enteredText);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

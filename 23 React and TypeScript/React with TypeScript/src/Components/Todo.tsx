import React, { useContext } from "react";
import { TodoContext } from "../store/todo-context";

import TodoItem from "./TodoItem";
import styles from "./Todo.module.css";

const Todo: React.FC = () => {
  const ctx = useContext(TodoContext);

  return (
    <ul className={styles.todos}>
      {ctx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={ctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todo;

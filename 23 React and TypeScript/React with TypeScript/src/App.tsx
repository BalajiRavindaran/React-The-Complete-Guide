import NewTodo from "./Components/NewTodo";
import Todo from "./Components/Todo";

import TodoContextProvider from "./store/todo-context";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo/>
      <Todo/>
    </TodoContextProvider>
  );
}

export default App;

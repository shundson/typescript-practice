import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todos";
import { TodoType } from "./type/todo";

export default function App() {
  const [todos, settodos] = useState<Array<TodoType>>([]);
  const fetch = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        settodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={fetch}></button>
      {todos.map((todo) => (
        <Todo
          key={todo.userId}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

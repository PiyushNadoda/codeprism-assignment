import { useState } from "react";
import "./App.scss";
import Input from "./Components/Input";
import Todos from "./Components/Todos";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const addTodoHandler = () => {
    if (input) {
      setTodos((prevstate) => [
        ...prevstate,
        {
          status: "not done",
          todo: input,
        },
      ]);
      setInput("");
    }
  };

  const markTodoAsDone = (index) => {
    const temp = todos;
    temp[index].status = "done";
    setTodos(JSON.parse(JSON.stringify(temp)));
  };

  const deleteTodo = (index) => {
    const temp = todos.filter((_x, i) => i !== index);
    setTodos(temp)
  };

  return (
    <div className="App">
      <div className="todo-container">
        <Input
          inputChangeHandler={inputChangeHandler}
          addTodoHandler={addTodoHandler}
          value={input}
        />
        <Todos todos={todos} deleteTodo={deleteTodo} markTodoAsDone={markTodoAsDone} />
      </div>
    </div>
  );
}

export default App;

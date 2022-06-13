import { RiDeleteBin6Line } from "react-icons/ri";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";

const Todos = ({ todos, markTodoAsDone, deleteTodo }) => {
  return (
    <div className="todos-container">
      {todos.map((x, index) => {
        if (x.status === "not done") {
          return (
            <div className="todo" key={index}>
              <p>{x.todo}</p>
              <div className="todo-btns">
                <RiDeleteBin6Line
                  className="bin"
                  onClick={deleteTodo.bind(this, index)}
                />
                <IoIosCheckmarkCircleOutline
                  className="mark"
                  onClick={markTodoAsDone.bind(this, index)}
                />
              </div>
            </div>
          );
        }
        return "";
      })}
      <div className="line"></div>
      {todos.map((x, index) => {
        if (x.status === "done") {
          return (
            <div className="todo done" key={index}>
              <p>{x.todo}</p>
              <div className="todo-btns">
                <RiDeleteBin6Line
                  className="bin"
                  onClick={deleteTodo.bind(this, index)}
                />
                <IoIosCheckmarkCircle className="mark" />
              </div>
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};

export default Todos;

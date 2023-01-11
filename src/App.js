import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  const [filter, setFilter] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Friday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="buttons">
        <button onClick={() => setFilter("all")}>All Items</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          if (obj.text === "") {
            return null;
          } else if (filter === "" || filter === "all") {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      setTodos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    onClick={() => {
                      return setTodos(
                        toDos.filter((obj3) => obj3.id !== obj.id)
                      );
                    }}
                    className="fas fa-times"
                  ></i>
                </div>
              </div>
            );
          } else if (filter === "pending" || filter === "completed") {
            const status = filter === "completed" ? true : false;
            if (obj.status === status) {
              return (
                <div className="todo">
                  <div className="left">
                    <input
                      onChange={(e) => {
                        setTodos(
                          toDos.filter((obj2) => {
                            if (obj2.id === obj.id) {
                              obj2.status = e.target.checked;
                            }
                            return obj2;
                          })
                        );
                      }}
                      value={obj.status}
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <p>{obj.text}</p>
                  </div>
                  <div className="right">
                    <i
                      onClick={() => {
                        return setTodos(
                          toDos.filter((obj3) => obj3.id !== obj.id)
                        );
                      }}
                      className="fas fa-times"
                    ></i>
                  </div>
                </div>
              );
            } else return null;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./TODOAPP.css";
const TODOAPP = () => {
  // BASIC SYNTAX OF useState Hooks
  // const [stateVariable , setstateFunction] = useState(initial Value)

  // stateVarivale --> Ynha Value store hoti hai.
  // setStateFunction --> Ye ek function hai jissey hum state ko update karte hai.
  // Initial Value --> State ki starting value.

  const [task, setTask] = useState(""); // input ke liye state.
  const [tasks, setTasks] = useState([]); // list of tasks.

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]); // List me new task add kara.
    setTask(""); // Input Clear ho jaae add hone k baad
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h2>TODO App</h2>

      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TODOAPP;

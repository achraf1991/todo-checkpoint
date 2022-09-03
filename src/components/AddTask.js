import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTask } from "../Redux/todoSlice/TodoSlice";
import "../App.css";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, settask] = useState({
    id: Math.random(),
    title: "",
    description: "",
    isDone: false,
  });
  return (
    <div className="task-add">
      <input
        type="text"
        placeholder=" Task name"
        
        onChange={(e) => {
          settask({ ...task, title: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder=" Task description"
        onChange={(e) => {
          settask({ ...task, description: e.target.value });
        }}
      />

      <button onClick={() => dispatch(addTask(task))}>Add New Task</button>
    </div>
  );
};

export default AddTask;

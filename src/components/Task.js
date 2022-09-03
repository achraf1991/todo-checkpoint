import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../Redux/todoSlice/TodoSlice";
import EditTask from "./EditTask";
import "../App.css";

const Task = ({ todo }) => {
  const Dispatch = useDispatch();
  const [show, setShow] = useState(false);
  return (
    <div className="task-card">
      {show ? (
        <EditTask setShow={setShow} todo={todo} />
      ) : (
        <div className="task-card1">
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <span onClick={() => Dispatch(doneTask({ id: todo.id }))}>
            {todo.isDone ? "Done" : "Not Done"}
          </span>{" "}
          <br />
          <button onClick={() => setShow(true)}>Edit </button>
          <button onClick={() => Dispatch(deleteTask({ id: todo.id }))}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;

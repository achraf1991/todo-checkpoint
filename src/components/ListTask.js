import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import Task from "./Task";
import "../App.css";

const ListTask = () => {
  const todos = useSelector((state) => state.todo.todoList);
  const [showdone, setshowdone] = useState(false);
  const [all, setall] = useState(true);
  return (
    <div>
      <AddTask />
      <div className="All">
        <button onClick={() => setall(true)}>All</button>
        <button
          onClick={() => {
            setshowdone(!showdone);
            setall(false);
          }}
        >
          {showdone ? "show undone" : "show done"}
        </button>
      </div>
      {todos
        ?.filter((todo) =>
          all ? todo : showdone ? todo.isDone === true : todo.isDone === false
        )
        .map((todo, i) => (
          <Task key={i} todo={todo} />
        ))}
    </div>
  );
};

export default ListTask;

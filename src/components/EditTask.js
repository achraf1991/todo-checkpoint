import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../Redux/todoSlice/TodoSlice";

const EditTask = ({ todo, setShow }) => {
  const [Ntask, setNtask] = useState(todo);
  const dispatch = useDispatch();
  return (
    <div className="ajoute ">
      <input 
        type="text"
        placeholder="Enter task name"
        onChange={(event) => setNtask({ ...Ntask, title: event.target.value })}
      />
      
      <input
        type="text"
        placeholder="Enter task description"
        onChange={(event) =>
          setNtask({ ...Ntask, description: event.target.value })
        }
      />
      <button
        onClick={() => {
          dispatch(editTask(Ntask));
          setShow(false);
        }}
      >
         Edit 
      </button>
    </div>
  );
};

export default EditTask;

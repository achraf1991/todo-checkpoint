import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: Math.random(),
      title: " Item Todo1",
      description: "Description 1",
      isDone: false,
    },
    {
      id: Math.random(),
      title: " Item Todo2",
      description: "Description 2",
      isDone: false,
    },
    {
      id: Math.random(),
      title: " Item Todo3",
      description: "Description 3",
      isDone: true,
    },
    {
      id: Math.random(),
      title: " Item Todo4",
      description: "Description 4",
      isDone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter((t) => t.id !== action.payload.id);
    },
    doneTask: (state, action) => {
      let i = state.todoList.findIndex((el) => el.id === action.payload.id);
      state.todoList[i] = {
        ...state.todoList[i],
        isDone: !state.todoList[i].isDone,
      };
    },
    editTask: (state, action) => {
      state.todoList = state.todoList.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
     
    },
  },
});

export const { addTask, deleteTask, doneTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;

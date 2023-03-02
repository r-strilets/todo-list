import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push({ ...payload });
    },
    changeTaskStatus: (state, { payload }) => {
      const task = state.tasks.find((taks) => taks.id === payload);
      task.status = !task.status;
    },
  },
});

export const { addTask, changeTaskStatus } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;

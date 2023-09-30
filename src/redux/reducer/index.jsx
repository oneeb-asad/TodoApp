// taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        completeTask: (state, action) => {
            const todo = state.tasks.find(tasks => tasks.id === action.payload);
            if (todo) {
                if (!todo.completed) {
                    todo.completed = true;
                }
            }
        },
        toggleStar: (state, action) => {
            const taskId = action.payload;
            const task = state.tasks.find((task) => task.id === taskId);

            if (task) {
                task.important = !task.important;
            }
        }
    },
});

export const { addTask, deleteTask, toggleStar, completeTask } = taskSlice.actions;
export default taskSlice.reducer;

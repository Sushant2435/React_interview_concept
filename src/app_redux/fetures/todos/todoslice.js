import { createSlice } from "@reduxjs/toolkit";
import action from "./action";

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: action,
});
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

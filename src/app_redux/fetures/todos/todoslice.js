import { createSlice } from "@reduxjs/toolkit";
import action from "./action";

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: action,
});
export default todoSlice.reducer;

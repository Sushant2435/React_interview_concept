import { createSlice } from "@reduxjs/toolkit";
import action from "./action";

const initialState = {
    username: "",
    password: "",
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: action,
});
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
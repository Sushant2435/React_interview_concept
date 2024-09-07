import { createSlice } from "@reduxjs/toolkit";
import action from "./action";

const initialState = {
    userInfo: {}
}

const userSlice = createSlice({
    name: "userInfo",
    initialState: initialState,
    reducers: action
})

export const { setuserInfo } = userSlice.actions
export default userSlice.reducer;
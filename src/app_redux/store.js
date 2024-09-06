import { configureStore } from "@reduxjs/toolkit";
import authslice from "./fetures/auth/authslice";
import todoslice from "./fetures/todos/todoslice";

const store = configureStore({
    reducer: {
        auth: authslice,
        todo: todoslice,
    }
});

export default store;
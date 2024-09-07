import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authslice from "./fetures/auth/authslice";
import todoslice from "./fetures/todos/todoslice";
import userFormSlice from "./fetures/userform/userFormSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    auth: authslice,
    todo: todoslice,
    user: userFormSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer
});
export const persistor = persistStore(store)
export default store;
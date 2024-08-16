import { combineReducers, applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'
import { TodoReducer } from './reducers/TodoReducer';
const reducer = combineReducers({
    //this contains all the stores
    Todo: TodoReducer,
})

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

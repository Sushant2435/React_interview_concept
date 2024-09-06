export const TodoReducer = (state = { todos: [] }, action) => {
    let updatedTodos;

    switch (action.type) {
        case "ADD_TODO":
            updatedTodos = action.payload;
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return { todos: updatedTodos };
        case "REMOVE_TODO":
            updatedTodos = action.payload;
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return { todos: updatedTodos };
        case "UPDATE_TODO":
            updatedTodos = action.payload;
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return { todos: updatedTodos };
        default:
            return state;
    }
};

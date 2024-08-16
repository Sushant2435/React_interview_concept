export const TodoReducer = (state = { todos: [] }, action) => {
    let updatedTodos;

    switch (action.type) {
        case "ADD_TODO":
            updatedTodos = action.payload;
            localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save updated todos to localStorage
            return { todos: updatedTodos };

        case "REMOVE_TODO":
            updatedTodos = action.payload;
            localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save updated todos to localStorage
            return { todos: updatedTodos };

        case "UPDATE_TODO":
            updatedTodos = action.payload;
            localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save updated todos to localStorage
            return { todos: updatedTodos };

        default:
            return state;
    }
};

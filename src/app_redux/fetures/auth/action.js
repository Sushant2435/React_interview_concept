// const action = {
//     login: () => { },
//     logout: () => { },

// }

// export default action;

// or..............
export default {
    login: (state, action) => {
        state.username = action.payload.username;
        state.password = action.payload.password;
        state.isAuthenticated = true;

    },
    logout: () => { },

}
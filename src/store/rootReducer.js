import { todosReducer, } from "./slices/todosSlice";
import { toggleSMessages } from "./slices/notificationSlice";
import { showLogReducer } from "./slices/showLogSlice";
import { filterReducer } from "./slices/filterSlice";
import { combineReducers, createReducer, createSlice } from "@reduxjs/toolkit";
import { tokenReducer } from "./slices/tokenSlice";
import { loggerReducer } from "./slices/loggerSlice";

// const pageSlice = createSlice({
//     name: 'page',
//     initialState: 1,
//     reducers: {
//         changePage: (state, action) => action.payload
//     }
// })

// export const { changePage } = pageSlice.actions;
// export const pageReducer = pageSlice.reducer;

// export const rootReducer = combineReducers({
//     todos: todosReducer,
//     token: tokenReducer,
//     sNotifications: toggleSMessages,
//     showLog: showLogReducer,
//     filter: filterReducer,
//     log: loggerReducer,
//     // page: pageReducer
// });

export const rootReducer = {
    todos: todosReducer,
    token: tokenReducer,
    sNotifications: toggleSMessages,
    showLog: showLogReducer,
    filter: filterReducer,
    log: loggerReducer,
    // page: pageReducer
}
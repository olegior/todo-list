import { getFromLocalStorage } from "../utils/localStorage";
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer, } from "./slices/todosSlice";
import { toggleSMessages } from "./slices/notificationSlice";
import { showLogReducer } from "./slices/logSlice";
import { filterReducer } from "./slices/filterSlice";

const initialValue = {
    todos: getFromLocalStorage('todos') || undefined,
}

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        sNotifications: toggleSMessages,
        showLog: showLogReducer,
        filter: filterReducer
    },
    preloadedState: initialValue,
    devTools: process.env.NODE_ENV === 'development'
})


import { combineReducers } from "redux";
import { todosReducer } from "./todos/todosReducer";
import { showLogReducer } from "./log/logReducer";
import { toggleSMessages } from "./notifications/notificationReducer";
import { filterReducer } from "./filter/filterReducer";

const rootReducers = {
    todos: todosReducer,
    filter: filterReducer,
    showLog: showLogReducer,
    sNotifications: toggleSMessages,
};

export const rootReducer = combineReducers(rootReducers);
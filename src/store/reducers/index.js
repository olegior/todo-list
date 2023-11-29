import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { logReducer } from "./logReducer";

const rootReducers = {
    todos: todosReducer,
    log: logReducer
};

export const rootReducer = combineReducers(rootReducers);
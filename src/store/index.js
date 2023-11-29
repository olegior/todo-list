import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { getFromLocalStorage } from "../utils/localStorage";

const initialValue = {
    todos: getFromLocalStorage('todos'),
    log: getFromLocalStorage('log'),
}

export const store = createStore(rootReducer, initialValue,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools()
);

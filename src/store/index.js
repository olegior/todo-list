import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { getFromLocalStorage } from "../utils/localStorage";

const initialValue = {
    todos: getFromLocalStorage('todos') || undefined,
}

export const store = createStore(rootReducer, initialValue,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools()
);


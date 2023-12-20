import { todosReducer, } from "./slices/todosSlice";
import { toggleSMessages } from "./slices/notificationSlice";
import { showLogReducer } from "./slices/showLogSlice";
import { filterReducer } from "./slices/filterSlice";
import { tokenReducer } from "./slices/tokenSlice";
import { loggerReducer } from "./slices/loggerSlice";


export const rootReducer = {
    todos: todosReducer,
    token: tokenReducer,
    sNotifications: toggleSMessages,
    showLog: showLogReducer,
    filter: filterReducer,
    log: loggerReducer,
}
import { SHOW_LOG } from "./logConstants";

export const showLogReducer = (state = false, action) => {
    if (action.type === SHOW_LOG) {
        return !state;
    }
    return state;
}
import { TOGGLE_FILTER } from "./filterConstants";

export const filterReducer = (state = '', action) => {
    if (action.type === TOGGLE_FILTER)
        return action.payload;
    return state;
}
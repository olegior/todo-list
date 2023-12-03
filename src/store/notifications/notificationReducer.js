import { TOGGLE_S_NOTIFICATION } from "./notificationConstants";

export const toggleSMessages = (state = true, action) => {
    if (action.type === TOGGLE_S_NOTIFICATION)
        return !state;
    return state;
} 
import { createSlice } from "@reduxjs/toolkit";

const showSMessages = createSlice({
    name: 'sNotifications',
    initialState: true,
    reducers: {
        toggleNotification: (state) => !state
    },
})

export const { toggleNotification } = showSMessages.actions;
export const { reducer: toggleSMessages } = showSMessages;

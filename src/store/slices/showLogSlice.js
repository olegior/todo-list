import { createSlice } from "@reduxjs/toolkit";


const showLog = createSlice({
    name: 'log',
    initialState: false,
    reducers: {
        toggleLog: (state) => !state
    },
})

export const { toggleLog } = showLog.actions;
export const showLogReducer = showLog.reducer;

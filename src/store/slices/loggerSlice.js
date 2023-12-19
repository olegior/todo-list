import { createSlice } from "@reduxjs/toolkit";

const logger = createSlice({
    name: 'logger',
    initialState: [],
    reducers: {
        saveToLog: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {saveToLog} = logger.actions;
export const loggerReducer = logger.reducer;
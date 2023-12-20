import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/localStorage";

const logger = createSlice({
    name: 'logger',
    initialState: getFromLocalStorage('log') || [],
    reducers: {
        saveToLog: (state, action) => {
            state.push(action.payload);
            saveToLocalStorage('log', state)
        }
    }
})

export const { saveToLog } = logger.actions;
export const loggerReducer = logger.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../../utils/localStorage"

const filter = createSlice({
    name: 'filter',
    initialState: getFromLocalStorage('filter'),
    reducers: {
        toggleFilter: (state, action) => { state = action.payload }
    }
})

export const { toggleFilter } = filter.actions;
export const { reducer: filterReducer } = filter;
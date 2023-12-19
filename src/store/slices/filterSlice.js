import { createSlice } from "@reduxjs/toolkit";


const filter = createSlice({
    name: 'filter',
    initialState: 'all',
    reducers: {
        toggleFilter: (state, action) => action.payload
    }
})

export const { toggleFilter } = filter.actions;
export const { reducer: filterReducer } = filter;
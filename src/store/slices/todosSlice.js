import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => [...state, action.payload],
        deleteTodo: (state, action) => state.filter(e => e.id !== action.payload),
        toggleTodo: (state, action) => state.map(e => e.id === action.payload ? { ...e, isCompleted: !e.isCompleted } : e),
        editTodo: (state, action) => state.map(e => e.id === action.payload.id ? { ...e, title: action.payload.title } : e)
    },
    selectors: {
        selectTodos: (state, filter) => {
            switch (filter) {
                case '': return state;
                case false: return state.filter(e => !e.isCompleted);
                case true: return state.filter(e => e.isCompleted);
                default: return state;
            }
        }
    }
})

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todos.actions;
export const { reducer: todosReducer } = todos;
export const { selectTodos } = todos.selectors;

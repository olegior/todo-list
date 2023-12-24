import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../utils/todos'

const createTodosThunk = (action) => createAsyncThunk(
    `api/${action}`,
    async (payload,
    ) => {
        const response = await api[action](payload);
        return response;
    })

export const getTodosThunk = createTodosThunk('getTodos');
export const addTodoThunk = createTodosThunk('addTodo');
export const deleteTodoThunk = createTodosThunk('deleteTodo');
export const editTodoThunk = createTodosThunk('editTodo');
export const toggleTodoThunk = createTodosThunk('toggleTodo');

const initialState = {
    entities: [],
    loading: 'idle',
    error: null
};

const todos = createSlice({
    name: 'todos',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTodosThunk.fulfilled, (state, action) => {
                if (!action.payload?.message) {
                    state.entities = action.payload;
                    state.error = null;
                    state.loading = 'idle';
                }
                else {
                    state.entities = [];
                    state.error = action.payload.message
                    state.loading = 'failed';
                }
            })
            .addCase(getTodosThunk.pending, (state) => {
                state.loading = 'loading';
                state.entities = [];
                state.error = null;
            })
            .addCase(addTodoThunk.fulfilled, (state, action) => {
                state.entities.push(action.payload);
            })
            .addCase(toggleTodoThunk.fulfilled, (state, action) => {
                const response = action.payload[0];
                state.entities = state.entities
                    .map(todo => todo.id === response.id ? response : todo);
            })
            .addCase(editTodoThunk.fulfilled, (state, action) => {
                const response = action.payload;
                state.entities = state.entities
                    .map(todo => todo.id === response.id ? response : todo);
            })
            .addCase(deleteTodoThunk.fulfilled, (state, action) => {
                state.entities = state.entities
                    .filter(todo => todo.id !== action.payload.id);
            })
    }
})

export const { reducer: todosReducer } = todos;

export const selectTodos = (todos, filter) => {
    switch (filter) {
        case 'all': return todos;
        case 'active': return todos?.filter(e => !e.isCompleted);
        case 'completed': return todos?.filter(e => e.isCompleted);
        default: return todos;
    }
}
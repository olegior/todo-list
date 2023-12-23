import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../utils/todos'

export const getTodosThunk = createAsyncThunk('api/getTodos', async () => await api.getTodos());

const createTodosThunk = (action) => createAsyncThunk(
    `api/${action}`,
    async (payload, { dispatch }) => {
        const response = await api[action](payload);
        dispatch(getTodosThunk());
        return response;
    })

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
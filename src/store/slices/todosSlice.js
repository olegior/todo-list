import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, getTodos, toggleTodo, editTodo } from "../../utils/todos";

export const getTodosThunk = createAsyncThunk('api/get-todos', async () => await getTodos());

export const addTodoThunk = createAsyncThunk('api/add-todo', async (title, { dispatch }) => {
    await addTodo(title);
    dispatch(getTodosThunk());
});

export const deleteTodoThunk = createAsyncThunk('api/delete-todo', async (id, { dispatch }) => {
    await deleteTodo(id);
    dispatch(getTodosThunk());
});

export const toggleTodoThunk = createAsyncThunk('api/toggle-todo', async (id, { dispatch }) => {
    await toggleTodo(id);
    dispatch(getTodosThunk());
});

export const editTodoThunk = createAsyncThunk('api/edit-todo', async ({ id, title }, { dispatch }) => {
    await editTodo(id, title)
    dispatch(getTodosThunk());
});

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
    if (todos) {
        switch (filter) {
            case 'all': return todos;
            case 'active': return todos.filter(e => !e.isCompleted);
            case 'completed': return todos.filter(e => e.isCompleted);
            default: return todos;
        }
    }
}
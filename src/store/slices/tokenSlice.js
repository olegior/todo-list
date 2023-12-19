import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendRequest } from "../../utils/api";

export const userLogin = createAsyncThunk(
    'api/user-login',
    async (data, { dispatch }) => {
        const response = await sendRequest('auth/login', 'post', data)
        dispatch(saveToken(response.token));
    }
)

export const userRegister = createAsyncThunk(
    'api/user-register',
    async (data) => await sendRequest('users/register', 'post', data)
)

const token = createSlice({
    name: 'toekn',
    initialState: null,
    reducers: {
        saveToken: (store, action) => action.payload,
        deleteToken: () => null
    },
    extraReducers: builder => {
        builder
            .addCase(userRegister.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state = action.payload
            })
    }
})

export const { saveToken, deleteToken } = token.actions;
export const tokenReducer = token.reducer;
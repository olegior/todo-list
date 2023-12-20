import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendRequest } from "../../utils/api";
import { getFromLocalStorage, saveToLocalStorage, deleteFromLocalStorage } from "../../utils/localStorage";

export const userLogin = createAsyncThunk(
    'api/user-login',
    async (data, { dispatch }) => {
        const response = await sendRequest('auth/login', 'post', data);
        if (response.token)
            dispatch(saveToken(response.token));
        return response;
    }
)

export const userRegister = createAsyncThunk(
    'api/user-register',
    async (data) => await sendRequest('users/register', 'post', data)
)

const token = createSlice({
    name: 'token',
    initialState: getFromLocalStorage('token'),
    reducers: {
        saveToken: (state, action) => {
            saveToLocalStorage('token', action.payload)
        },
        deleteToken: () => {
            deleteFromLocalStorage('token');
            return null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(userRegister.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state = action.payload
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                if (action.payload.token)
                    return action.payload.token
            })
    }
})

export const { saveToken, deleteToken } = token.actions;
export const tokenReducer = token.reducer;
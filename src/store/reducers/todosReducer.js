import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "../constants";

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }
        case DELETE_TODO: {
            return state.filter(e => e.id !== action.payload);
        }
        case TOGGLE_TODO: {
            return state.map(e => e.id === action.payload ? { ...e, isCompleted: !e.isCompleted } : e);
        }
        case EDIT_TODO: {
            return state.map(e => e.id === action.payload.id ? { ...e, title: action.payload.title } : e)
        }
        default: {
            return state;
        }
    }
}


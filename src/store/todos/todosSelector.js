export const selectTodos = (state, filter) => {
    switch (filter) {
        case undefined: return state;
        case false: return state.filter(e => !e.isCompleted);
        case true: return state.filter(e => e.isCompleted);
        default: return state;
    }
}
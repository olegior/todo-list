//todos 
export const addTodo = (todos, todo) => {
    return [...todos, todo]
}

export const deleteTodo = (todos, id) => {
    return todos.filter(todo => todo.id !== id)
}

export const toggleTodo = (todos, id) => {
    return todos.map(todo => todo.id === id ? ({ ...todo, completed: !todo.completed }) : todo);
}

export const editTodo = (todos, id, newTodo) => {
    return todos.map(todo => todo.id === id ? { ...todo, todo: newTodo } : todo);
}

// filters
export const filterTodos = (todos, filter) => {
    if (filter === undefined) {
        return todos;
    }
    return todos.filter(todo => todo.completed === filter)
}

export const getTodosCount = (todos, filter) => {
    return filterTodos(todos, filter).length
}
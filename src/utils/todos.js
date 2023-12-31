import { sendRequest } from "./api"

const URL = 'todos';

export const getTodos = async () => {
    return await sendRequest(URL, 'get');
}

export const addTodo = async (todo) => {
    return await sendRequest(URL, 'post', { title: todo });
}

export const deleteTodo = async (id) => {
    return await sendRequest(`${URL}/${id}`, 'delete')
}

export const toggleTodo = async (id) => {
    return await sendRequest(`${URL}/${id}/isCompleted`, 'patch')
}

export const editTodo = async (id, newTodo) => {
    return await sendRequest(`${URL}/${id}`, 'patch', { title: newTodo })
}

// filters
export const filterTodos = (todos, filter) => {
    if (filter === undefined) {
        return todos;
    }
    return todos.filter(todo => todo.isCompleted === filter)
}

export const getTodosCount = (todos, filter) => {
    return filterTodos(todos, filter).length
}
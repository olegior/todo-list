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

export const editTodo = async ({ id, title }) => {
    return await sendRequest(`${URL}/${id}`, 'patch', { title })
}
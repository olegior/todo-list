import { sendRequest } from "./api"
const URL = 'todos';
const AUTHTOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdldDJwYXlAcGF5aW4uY29tIiwiaWQiOjMyOSwiaWF0IjoxNzAwMzg0MzM5fQ.kqF1oRrWPxV58S3kLcloIWpD21zKVOAS1z9h2ZYhVq4`;
//change all occurences completed -> isCompleted

// export const addTodo = (todos, todo) => {
//     return [...todos, todo]
// }
export const getTodos = async () => {
    return await sendRequest(URL, 'get');
}

export const addTodo = async (todo) => {
    return await sendRequest(URL, 'post', { title: todo });
}

// export const deleteTodo = (todos, id) => {
//     return todos.filter(todo => todo.id !== id)
// }

export const deleteTodo = async (id) => {
    return await sendRequest(`${URL}/${id}`, 'delete')
}

// export const toggleTodo = (todos, id) => {
//     return todos.map(todo => todo.id === id ? ({ ...todo, isCompleted: !todo.isCompleted }) : todo);
// }

export const toggleTodo = async (id) => {
    return await sendRequest(`${URL}/${id}/isCompleted`, 'patch')
}


// export const editTodo = (todos, id, newTodo) => {
//     return todos.map(todo => todo.id === id ? { ...todo, todo: newTodo } : todo);
// }

export const editTodo = async (id, newTodo) => {
    return await sendRequest(`${URL}/${id}`, 'patch', { title: newTodo }, AUTHTOKEN)
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
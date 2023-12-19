import axios from "axios";

export const ax = axios.create({
    baseURL: 'https://todo-redev.herokuapp.com/api',
})

export const sendRequest = async (url, method, body) => {
    try {
        const response = await ax[method](url, body);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

export const getDataAction = (node, name) => {
    try {
        return node.dataset[name] ? node.dataset[name] : getDataAction(node.parentNode, name)
    }
    catch (err) {
        return undefined;
    }
}
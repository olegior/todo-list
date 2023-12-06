import axios from "axios";
import { getFromLocalStorage } from "./localStorage";

const BASEURL = 'https://todo-redev.herokuapp.com/api/';
const token = getFromLocalStorage('token');

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export const sendRequest = async (url, method, body) => {
    try {
        const response = await axios[method](BASEURL + url, body);
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
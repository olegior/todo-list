import axios from "axios";
import { getFromLocalStorage } from "./localStorage";

const BASEURL = 'https://todo-redev.herokuapp.com/api/';

// const [token] = getFromLocalStorage('token');
const token = getFromLocalStorage('token');

export const sendRequest = async (url, method, body) => {
    try {
        if (token)
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios[method](BASEURL + url, body);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

export const getData = (node, name) => {
    try {
        return node.dataset[name] ? node.dataset[name] : getData(node.parentNode, name)
    }
    catch (err) {
        return undefined;
    }
}
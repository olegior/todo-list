export const setToLocalStorage = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
}

export const getFromLocalStorage = (name) => {
    try {
        const data = JSON.parse(localStorage.getItem(name));
        // return Array.isArray(data) ? data : [];
        return data;
    }
    catch (e) {
        console.log(console.error(e));
        // return [];
    }
}

export const deleteFromLocalStorage = (name) => {
    localStorage.removeItem(name);
}
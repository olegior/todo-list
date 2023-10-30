export const setToLocalStorage = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
}

export const getFromLocalStorage = (name) => {
    try {
        const data = JSON.parse(localStorage.getItem(name));
        return Array.isArray(data) ? data : [];
    }
    catch (e) {
        console.log(console.error(e));
        return [];
    }
}
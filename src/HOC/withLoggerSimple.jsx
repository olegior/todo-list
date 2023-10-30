import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";

export const withLoggerSimple = (Component) => {
    const createLogString = (action) => {
        const time = new Date().toLocaleString();
        return `${time}: ${action} запись: `;
    }

    // const actions = {
    //     deleteButton: createLogString('Удалена'),
    //     addButton: createLogString('Добавлена'),
    //     checkButton: createLogString(!todo.completed ? 'Выполнена' : 'Активна'),
    //     editButton: createLogString('Изменена'),
    // }

    const actions = {
        deleteButton: 'Удалена',
        addButton: 'Добавлена',
        checkButton: 'Отмечена',
        editButton: 'Изменена',
    }

    const log = getFromLocalStorage('log');

    const getData = (node, name) => {
        console.log(node, name);
        try {
            return node.dataset[name] ? node.dataset[name] : getData(node.parentNode, name)
        }
        catch (err) {
            return undefined;
        }
    }

    const getTodo = (json) => {
        console.log(json);
        return JSON.parse(json);
    }

    const handleClick = (e) => {
        const target = getData(e.target, 'name');
        if (target) {
            console.log(target);
            const todo = getTodo(getData(e.target, 'log'))
            setToLocalStorage('log', [...log, { action: createLogString(actions[target]), todo: todo.todo }])
        }
    }
    // eslint-disable-next-line react/display-name
    return (props) => {
        return (<>
            <div onClick={handleClick} name='logger'>
                <Component {...props} />
            </div></>
        )
    }
}
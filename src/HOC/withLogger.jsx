import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";

export const withLogger = (Component, todo = {}) => {
    const createLogString = (action) => {
        const time = new Date().toLocaleString();
        return `${time}: ${action} запись: `;
    }

    const actions = {
        DeleteTodoButton: createLogString('Удалена'),
        AddTodoButton: createLogString('Добавлена'),
        CheckTodoButton: createLogString(!todo.completed ? 'Выполнена' : 'Активна'),
        EditTodoButton: createLogString('Изменена'),
    }

    const log = getFromLocalStorage('log');


    const handleClick = () => {
        setToLocalStorage('log', [...log, { action: actions[Component.name], todo: todo.todo }])
    }
    // eslint-disable-next-line react/display-name
    return (props) => {
        return (<>
            <div onClick={handleClick} >
                <Component {...props} />
            </div></>
        )
    }
}
import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";

export const withLogger = (Component) => {
    const createLogString = (action) => {
        const time = new Date().toLocaleString();
        return `${time}: ${action} запись: `;
    }

    const log = getFromLocalStorage('log') || [];

    const getData = (node, name) => {
        try {
            return node.dataset[name] ? node.dataset[name] : getData(node.parentNode, name)
        }
        catch (err) {
            return undefined;
        }
    }

    const getTodo = (json) => {
        try{
            return JSON.parse(json);
        }
        catch(err){
            return {todo:null}
        }
    }

    const handleClick = (e) => {
        const action = getData(e.target, 'action');
        console.log(action);
        if (action) {
            const todo = getTodo(getData(e.target, 'log'));
            setToLocalStorage('log', [...log, {
                action: createLogString(action),
                todo: todo.title //consider to api: todo.todo -> todo.title
            }])
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
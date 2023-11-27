import { getDataAction } from "../utils/api";
import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";


// /?
export const withLogger = (Component) => {
    const createLogString = (action) => {
        const time = new Date().toLocaleString();
        return `${time}: ${action} запись: `;
    }

    const log = getFromLocalStorage('log') || [];

    const getTodo = (json) => {
        try{
            return JSON.parse(json);
        }
        catch(err){
            return {todo:null}
        }
    }

    const handleClick = (e) => {
        const action = getDataAction(e.target, 'action');
        if (action) {
            const todo = getTodo(getDataAction(e.target, 'log'));
            setToLocalStorage('log', [...log, {
                action: createLogString(action),
                todo: todo.title 
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
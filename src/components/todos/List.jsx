import { List as AntList } from "antd";
import { ListItem } from "./ListItem";
import { Filter } from "./Filter";
import { getDataAction } from "../../utils/api";
import { useDispatch } from "react-redux";
import { deleteTodoThunk, editTodoThunk, toggleTodoThunk, } from "../../store/slices/todosSlice";
export const List = ({ todos = [], showNotification }) => {

    const dispatch = useDispatch();
    const handleEditTodo = (id, title) => {
        if (title) {
            dispatch(editTodoThunk({ id, title })).unwrap().then(showNotification)
        }
    }

    const page = Math.ceil(todos.length / 10);

    const handleTodos = (e) => {
        const handlers = {
            check: toggleTodoThunk,
            delete: deleteTodoThunk,
        }
        const type = getDataAction(e.target, 'type');

        if (type) {
            const id = +getDataAction(e.target, 'id');
            dispatch(handlers[type](id)).unwrap().then(data => {
                showNotification(data[0] || data);
            });
        }
    }

    return (
        <AntList
            onClick={handleTodos}
            className="control"
            size="medium"
            header={<Filter />}
            bordered
            dataSource={todos}
            pagination={
                {
                    align: 'center', hideOnSinglePage: true,
                    defaultCurrent: page
                }
            }
            renderItem={(todo) =>
                <AntList.Item style={{ borderWidth: '2px', }}>
                    <ListItem todo={todo} handleEditTodo={handleEditTodo} />
                </AntList.Item>
            }
        />
    )
}

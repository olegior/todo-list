import { List as AntList } from "antd";
import { ListItem } from "./ListItem";
import { Filter } from "./Filter";
import { getDataAction } from "../../utils/api";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../../store/slices/todosSlice";
export const List = ({ todos, showNotification }) => {

    const dispatch = useDispatch();

    const handleEditTodo = (id, title) => {
        if (title) {
            dispatch(editTodo({ id, title }));
            showNotification({ title })
        }
    }

    const handleTodos = (e) => {
        const handlers = {
            check: toggleTodo,
            delete: deleteTodo,
        }
        const type = getDataAction(e.target, 'type');
        if (type) {
            const id = getDataAction(e.target, 'id');
            showNotification(todos.find(e => e.id === id));
            dispatch(handlers[type](id));
        }
    }

    return (
        <>
            {/* {
                !!todos.length &&  */}
            <AntList
                onClick={handleTodos}
                className="control"
                size="medium"
                header={<Filter />}
                bordered
                dataSource={todos}
                pagination={{ align: 'center', hideOnSinglePage: true, }}
                renderItem={(todo) =>
                    <AntList.Item style={{ borderWidth: '2px', }}>
                        <ListItem todo={todo} handleEditTodo={handleEditTodo} />
                    </AntList.Item>
                }
            />
            {/* } */}
        </>
    )
}

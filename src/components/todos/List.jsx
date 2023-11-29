import { List as AntList } from "antd";
import { ListItem } from "./ListItem";
import { Filter } from "./Filter";
// import { deleteTodo, editTodo, filterTodos, toggleTodo } from "../../utils/todos";
import { getDataAction } from "../../utils/api";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../../store/actions/todosActions";

export const List = ({ controlTodos = [], hanldeFilter, filter }) => {

    const [todos, update] = controlTodos;

    // const handleEditTodo = async (id, newTodo) => {
    // if (newTodo) {
    //     const response = await editTodo(id, newTodo);
    //     update(response);
    // }
    // }

    const dispatch = useDispatch();

    const handleEditTodo = (id, title) => {
        if (title) {
            dispatch(editTodo({ id, title }))
        }
    }

    // const handleTodos = async (e) => {
    // const handlers = {
    //     check: toggleTodo,
    //     delete: deleteTodo,
    // }
    // const type = getDataAction(e.target, 'type');
    // if (type) {
    //     const response = await handlers[type](getDataAction(e.target, 'id'));
    //     update(response[0] || response); // найти проблему
    // }
    // }

    const handleTodos = (e) => {
        const handlers = {
            check: toggleTodo,
            delete: deleteTodo,
        }
        const type = getDataAction(e.target, 'type');
        if (type) {
            dispatch(handlers[type](getDataAction(e.target, 'id')));
            // update(response[0] || response); // найти проблему
        }
    }

    const options = [
        { label: 'все', value: undefined },
        { label: 'выполненые', value: true },
        { label: 'активные', value: false },
    ];

    return (
        <>
            {!!todos.length && <AntList
                onClick={handleTodos}
                className="control"
                size="medium"
                header={<Filter hanldeFilter={[filter, hanldeFilter]} options={options} />}
                bordered
                // dataSource={filterTodos(todos, filter)}
                dataSource={todos}
                pagination={{ align: 'center', hideOnSinglePage: true, }}
                renderItem={(todo) =>
                    <AntList.Item style={{ borderWidth: '2px', }}>
                        <ListItem todo={todo} handleEditTodo={handleEditTodo} />
                    </AntList.Item>
                }
            />}
        </>
    )
}

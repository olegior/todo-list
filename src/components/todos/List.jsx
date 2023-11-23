import { List as AntList } from "antd";
import { ListItem } from "./ListItem";
import { Filter } from "./Filter";
import { deleteTodo, editTodo, filterTodos, toggleTodo } from "../../utils/todos";
import { getData } from "../../utils/api";

export const List = ({ controlTodos = [], hanldeFilter, filter }) => {

    const [todos, update] = controlTodos;

    const handleEditTodo = (id, newTodo) => {
        if (newTodo) {
            handleTodos(editTodo(id, newTodo));
            update();
        }
    }

    const handleTodos = (e) => {
        const handlers = {
            check: toggleTodo,
            delete: deleteTodo,
        }
        const type = getData(e.target, 'type');
        if (type) {
            handlers[type](getData(e.target, 'id'));
            update();
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
                dataSource={filterTodos(todos, filter)}
                pagination={{ align: 'center', hideOnSinglePage: true, }}
                renderItem={(todo) =>
                    <AntList.Item style={{ borderWidth: '2px', }}>
                        {/* <ListItem todo={todo} handleTodos={{ handleCompletedTodo, handleDeleteTodo, handleEditTodo }} /> */}
                        <ListItem todo={todo} handleEditTodo={handleEditTodo} />
                    </AntList.Item>
                }
            />}
        </>
    )
}

import { List as AntList } from "antd";
import { ListItem } from "./ListItem";
import { Filter } from "./Filter";
import { deleteTodo, editTodo, filterTodos, toggleTodo } from "../../utils/todos";

export const List = ({ controlTodos = [], hanldeFilter, filter }) => {

    const [todos, handleTodos] = controlTodos;

    const handleDeleteTodo = (id) => {
        // handleTodos(deleteTodo(todos, id))
        handleTodos(deleteTodo(id));
    }
    const handleCompletedTodo = (id) => {
        // handleTodos(toggleTodo(todos, id))
        handleTodos(toggleTodo(id));
    }

    const handleEditTodo = (id, newTodo) => {
        if (newTodo)
            handleTodos(editTodo(id, newTodo))
    }

    const options = [
        { label: 'все', value: undefined },
        { label: 'выполненые', value: true },
        { label: 'активные', value: false },
    ];

    return (
        <>
            {!!todos.length && <AntList
                className="control"
                size="medium"
                header={<Filter hanldeFilter={[filter, hanldeFilter]} options={options} />}
                bordered
                dataSource={filterTodos(todos, filter)}
                pagination={{ align: 'center', hideOnSinglePage: true, }}
                renderItem={(todo) =>
                    <AntList.Item style={{ borderWidth: '2px', }}>
                        <ListItem todo={todo} handleTodos={{ handleCompletedTodo, handleDeleteTodo, handleEditTodo }} />
                    </AntList.Item>
                }
            />}
        </>
    )
}

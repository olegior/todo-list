import { List as AList } from "antd";
import { ListItem } from "./ListItem";
import { Filter } from "./Filter";
import { deleteTodo, editTodo, filterTodos, toggleTodo } from "../../utils/todos";

export const List = ({ controlTodos = [], hanldeFilter, filter }) => {

    const [todos, handleTodos] = controlTodos;

    const handleDeleteTodo = (id) => {
        handleTodos(deleteTodo(todos, id))
    }
    const handleCompletedTodo = (id) => {
        handleTodos(toggleTodo(todos, id))
    }

    const handleEditTodo = (id, newTodo) => {
        if (newTodo)
            handleTodos(editTodo(todos, id, newTodo))
    }

    const options = [
        { label: 'все', value: undefined },
        { label: 'выполненые', value: true },
        { label: 'активные', value: false },
    ];

    return (
        <>
            {!!todos.length && <AList
                className="control"
                size="medium"
                header={<Filter hanldeFilter={[filter, hanldeFilter]} options={options} />}
                bordered
                dataSource={filterTodos(todos, filter)}
                pagination={{ align: 'center', hideOnSinglePage: true, }}
                renderItem={(todo) =>
                    <AList.Item style={{ borderWidth: '2px', }}>
                        <ListItem todo={todo} handleTodos={{ handleCompletedTodo, handleDeleteTodo, handleEditTodo }} />
                    </AList.Item>
                }
            />}
        </>
    )
}

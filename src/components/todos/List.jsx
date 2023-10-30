import { List as AList } from "antd";
import { ListItem } from "./ListItem";
import { Filter } from "./Filter";
import { deleteTodo, editTodo, filterTodos, toggleTodo } from "../../utils/todos";
import { useState } from "react";

export const List = ({ controlTodos = [] }) => {
    const [filter, setFilter] = useState(undefined);

    const [todos, handleTodos] = controlTodos;

    const handleDeleteTodo = (id) => {
        handleTodos(deleteTodo(todos, id))
    }
    const handleCompletedTodo = (id) => {
        handleTodos(toggleTodo(todos, id))
    }

    const handleEditTodo = (id, newTodo) => {
        handleTodos(editTodo(todos, id, newTodo))
    }

    // const handleFilterTodos = () => {
    //     return filterTodos(todos, filter)
    // }
    // console.log(messageApi, messageContext);

    // const memedTodos = useMemo(handleFilterTodos, [filter]) // а надо ли?

    const options = [
        { label: 'все', value: undefined },
        { label: 'выполненые', value: true },
        { label: 'активные', value: false },
    ];

    // const setOptionsCount = (options) => {
    //     return options.map(option => ({ ...option, count: getTodosCount(todos, option.value) }));
    // }

    return (
        <>
            {/* {messageContext} */}
            {!!todos.length && <AList
                className="control"
                size="medium"
                header={
                    <Filter hanldeFilter={[filter, setFilter]}
                        // options={setOptionsCount(options)} 
                        options={options}
                    />}
                bordered
                // loading
                // dataSource={memedTodos}
                dataSource={filterTodos(todos, filter)}
                // itemLayout="vertical"
                // split
                pagination={
                    {
                        align: 'center',
                        hideOnSinglePage: true,

                    }
                }
                renderItem={(todo) =>
                    <AList.Item style={{
                        borderWidth: '2px',
                        // padding: 0,
                        // textAlign: 'justify'
                    }}>
                        <ListItem todo={todo} handleTodos={{ handleCompletedTodo, handleDeleteTodo, handleEditTodo }} />
                    </AList.Item>
                }
            />}
        </>
    )
}

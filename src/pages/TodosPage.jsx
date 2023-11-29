import { Content } from 'antd/es/layout/layout'
import { Layout, Row, } from 'antd'

import { List } from '../components/todos/List'
import { LogDrawer } from '../components/todos/LogDrawer'
import { TodosCol } from '../components/todos/TodosCol'
import { TodosButton } from '../components/todos/TodosButton'
import { SubmitButton } from '../components/form/SubmitButton'
import { Form } from '../components/form/Form'
import { Header } from '../components/todos/Header'

import { useEffect, useState } from 'react'

import { withLogger } from '../HOC/withLogger'
import { useNotification } from '../hooks/useNotification'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../store/actions/todosActions'
import { setToLocalStorage } from '../utils/localStorage'
import { v4 } from 'uuid'


export const TodosPage = () => {

    const [showSuccess, setShowSuccess] = useState(true);
    const [showNotification, contextHolder] = useNotification(showSuccess, 'bottomRight');
    const [filter, setFilter] = useState(undefined);
    const [isLogOpen, setIsLogOpen] = useState(false);

    const LogInput = withLogger(Form);
    const LogList = withLogger(List);

    const todos = useSelector(store => store.todos);

    const dispatch = useDispatch();


    const handleLogOpen = () => {
        setIsLogOpen(isLogOpen => !isLogOpen)
    }

    const hanldeFilter = (value) => {
        setFilter(value)
    }

    const handleSuccess = () => {
        setShowSuccess(prev => !prev);
    }

    const handleShow = (e) => {
        console.log();
        showNotification(e);
        // setResponse(e);
    }

    const handleAddTodo = (e) => {
        dispatch(addTodo({ id: v4(), title: e.todo, isCompleted: false }));
    }


    useEffect(() => {
        setToLocalStorage('todos', todos);

    }, [todos])

    const fields = [
        {
            name: 'todo', placeholder: 'введите текст...', rule: [
                { type: 'string', }, { whitespace: true, message: 'Уберите лишние пробелы!' },
            ]
        }
    ];
    const button = <TodosButton Component={SubmitButton} action='Добавлена' title='Добавить' />;


    return (
        <>
            <LogDrawer open={isLogOpen} handleOpen={handleLogOpen} />
            {contextHolder}
            <Layout className='layout'>
                <Header handleLogOpen={handleLogOpen} showSuccess={showSuccess} handleSuccess={handleSuccess} />
                <Layout className='layout'>
                    <Content style={{ padding: '10px' }}>
                        <Row>
                            <TodosCol>
                                <LogInput name="todoInput" fields={fields} button={button} cb={handleAddTodo} />
                            </TodosCol>
                        </Row>
                        <Row>
                            <TodosCol>
                                <LogList controlTodos={[todos, handleShow]} hanldeFilter={hanldeFilter} filter={filter} />
                            </TodosCol>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

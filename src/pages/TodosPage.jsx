import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Content } from 'antd/es/layout/layout'
import { Layout, Row, } from 'antd'

import { List } from '../components/todos/List'
import { LogDrawer } from '../components/todos/LogDrawer'
import { TodosCol } from '../components/todos/TodosCol'
import { TodosButton } from '../components/todos/TodosButton'
import { SubmitButton } from '../components/form/SubmitButton'
import { Form } from '../components/form/Form'
import { Header } from '../components/todos/Header'

import { withLogger } from '../HOC/withLogger'
import { useNotification } from '../hooks/useNotification'
import { v4 } from 'uuid'
import { setToLocalStorage } from '../utils/localStorage'
import { addTodo, selectTodos } from '../store/slices/todosSlice'
import { toggleNotification } from '../store/slices/notificationSlice'
import { toggleLog } from '../store/slices/logSlice'

export const TodosPage = () => {

    const LogInput = withLogger(Form);
    const LogList = withLogger(List);

    const dispatch = useDispatch();

    const showSuccess = useSelector(store => store.sNotifications);
    const filter = useSelector(store => store.filter);
    const todos = useSelector(store => selectTodos(store, filter));
    const isLogOpened = useSelector(store => store.showLog);

    const [showNotification, contextHolder] = useNotification(showSuccess, 'bottomRight');

    const handleLogOpen = () => {
        dispatch(toggleLog());
    }

    const handleSuccess = () => {
        dispatch(toggleNotification())
    }

    const handleAddTodo = (e) => {
        showNotification({ title: e.todo })
        dispatch(addTodo({ id: v4(), title: e.todo, isCompleted: false }));
    }

    useEffect(() => setToLocalStorage('todos', todos), [todos])

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
            <LogDrawer open={isLogOpened} handleOpen={handleLogOpen} />
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
                                <LogList todos={todos} showNotification={showNotification} />
                            </TodosCol>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

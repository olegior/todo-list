import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Content } from 'antd/es/layout/layout'
import { Layout, Row, Spin, } from 'antd'

import { List } from '../components/todos/List'
import { LogDrawer } from '../components/todos/LogDrawer'
import { TodosCol } from '../components/todos/TodosCol'
import { TodosButton } from '../components/todos/TodosButton'
import { SubmitButton } from '../components/form/SubmitButton'
import { Form } from '../components/form/Form'
import { Header } from '../components/todos/Header'

import { withLogger } from '../HOC/withLogger'
import { useNotification } from '../hooks/useNotification'

import {
    selectTodos,
    getTodosThunk,
    addTodoThunk,
} from '../store/slices/todosSlice'
import { toggleNotification } from '../store/slices/notificationSlice'
import { toggleLog } from '../store/slices/showLogSlice'
import { ax } from '../utils/api'

export const TodosPage = () => {


    const LogInput = withLogger(Form);
    const LogList = withLogger(List);

    const dispatch = useDispatch();

    const showSuccess = useSelector(store => store.sNotifications);
    const filter = useSelector(store => store.filter);

    const todo = useSelector(store => store.todos);

    const todos = selectTodos(todo.entities, filter)
    const loading = todo.loading

    const isLogOpened = useSelector(store => store.showLog);
    const token = useSelector(store => store.token);

    const [showNotification, contextHolder] = useNotification(showSuccess, 'bottomRight');

    const handleLogOpen = () => {
        dispatch(toggleLog());
    }

    const handleSuccess = () => {
        dispatch(toggleNotification())
    }

    const handleAddTodo = (e) => {
        dispatch(addTodoThunk(e.todo))
            .unwrap().then(showNotification)
    }

    ax.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, (err) => console.log(err))

    useEffect(() => {
        dispatch(getTodosThunk())
        // .unwrap().then(showNotification)
    }, []);

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
                                {loading === 'loading'
                                    ? <>
                                        <Spin tip="Загрузка дел..." size="large">
                                            <div className="content" style={{ padding: '50px' }} />
                                        </Spin>
                                    </>
                                    : < LogList todos={todos} showNotification={showNotification} />}
                                {loading === 'failed' && <span style={{ color: 'red' }}>{todo.error}</span>}
                            </TodosCol>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

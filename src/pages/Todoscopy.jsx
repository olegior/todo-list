import { Content } from 'antd/es/layout/layout'
import { Layout, Row, } from 'antd'

import { List } from '../components/todos/List'
import { LogDrawer } from '../components/todos/LogDrawer'
import { CustomCol } from '../components/todos/CustomCol'
import { CustomButton } from '../components/todos/CustomButton'
import { AddButton } from '../components/todos/AddButton'
import { CustomForm } from '../components/todos/CustomForm'
import { Header } from '../components/todos/Header'

import { useEffect, useState } from 'react'

import { withLogger } from '../HOC/withLogger'
import { addTodo, getTodos } from '../utils/todos'
import { useNotification } from '../hooks/useNotification'

export const TodosCopy = () => {
    const [todos, setTodos] = useState([]);
    const [response, setResponse] = useState();
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const loadTodos = async () => {
            const response = await getTodos();
            showNotification(response);
            setTodos(response)
        }
        loadTodos();
    }, [response])


    const [isLogOpen, setIsLogOpen] = useState(false);

    const handleLogOpen = () => {
        setIsLogOpen(isLogOpen => !isLogOpen)
    }

    const [filter, setFilter] = useState(undefined);

    const hanldeFilter = (value) => {
        setFilter(value)
    }

    const LogInput = withLogger(CustomForm);
    const LogList = withLogger(List);

    const [showNotification, contextHolder] = useNotification(showSuccess, 'bottomRight')

    const fields = [
        {
            name: 'todo', placeholder: 'введите текст...', rule: [
                { type: 'string', }, { whitespace: true, message: 'Уберите лишние пробелы!' },
            ]
        }
    ];
    const button = <CustomButton Component={AddButton} action='Добавлена' title='Добавить' />;
    const addTodoHandler = (e) => {
        setResponse(addTodo(e.todo));
    }

    return (
        <>
            <LogDrawer open={isLogOpen} handleOpen={handleLogOpen} />
            {contextHolder}
            <Layout className='layout'>
                <Header handleLogOpen={handleLogOpen} showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
                <Layout className='layout'>
                    <Content style={{ padding: '10px' }}>
                        <Row>
                            <CustomCol>
                                <LogInput name="todoInput" fields={fields} button={button} cb={addTodoHandler} />
                            </CustomCol>
                        </Row>
                        <Row>
                            <CustomCol>
                                <LogList controlTodos={[todos, (e) => setResponse(e)]} hanldeFilter={hanldeFilter} filter={filter} />
                            </CustomCol>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

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

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    // *************
    // const [requestTime, setRequestTime] = useState(Date.now());
    const [requestTime, setRequestTime] = useState(0);
    // *************

    useEffect(() => {
        setIsDisabled(true);
    }, [todos])


    useEffect(() => {
        setIsDisabled(false);
        getTodos().then(setTodos);
    }, [requestTime])
    // *************

    // const handleTodos = () => {
    //     console.log(todos);
    //     setRequestTime(Date.now());

    // }


    const [isLogOpen, setIsLogOpen] = useState(false);

    const handleLogOpen = () => {
        setIsLogOpen(isLogOpen => !isLogOpen)
    }

    const [filter, setFilter] = useState(undefined);

    const hanldeFilter = (value) => {
        setFilter(value)
    }

    // const LogInput = withLogger(InputForm);
    const LogInput = withLogger(CustomForm);
    const LogList = withLogger(List);

    const fields = [
        {
            name: 'todo', placeholder: 'введите текст...', rule: [
                { type: 'string', }, { whitespace: true, message: 'Уберите лишние пробелы!' },
            ]
        }
    ];
    const button = <CustomButton Component={AddButton} action='Добавлена' title='Добавить' />;
    const addTodoHandler = (e) => {
        addTodo(e.todo);
        setRequestTime(Date.now());
    }

    return (
        <>
            <LogDrawer open={isLogOpen} handleOpen={handleLogOpen} />
            <Layout className='layout'>
                <Header handleLogOpen={handleLogOpen} />
                <Layout className='layout'>
                    <Content style={{ padding: '10px' }}>
                        <Row>
                            <CustomCol>
                                <LogInput name="todoInput" fields={fields} button={button} cb={addTodoHandler} />
                            </CustomCol>
                        </Row>
                        <Row>
                            <CustomCol>
                                {/* <LogList controlTodos={[todos, handleTodos]} hanldeFilter={hanldeFilter} filter={filter} /> */}
                                {/* <LogList controlTodos={[todos, () => setRequestTime(Date.now())]} hanldeFilter={hanldeFilter} filter={filter} /> */}
                                <LogList isDisabled={isDisabled} controlTodos={[todos, () => setRequestTime((prev) => ++prev)]} hanldeFilter={hanldeFilter} filter={filter} />
                            </CustomCol>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

import { Content } from 'antd/es/layout/layout'
import { Layout, Row, } from 'antd'

import { List } from '../components/todos/List'
import { InputForm } from '../components/todos/InputForm'
import { LogDrawer } from '../components/todos/LogDrawer'
import { CustomCol } from '../components/todos/CustomCol'
import { Header } from '../components/todos/Header'

import { useEffect, useState } from 'react'
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage'
import { withLoggerSimple } from '../HOC/withLoggerSimple'

export const TodoList = () => {
    const [todos, setTodos] = useState(getFromLocalStorage('todos'));
    const handleTodos = (todos) => {
        setTodos(todos);
    }

    useEffect(() => {
        setToLocalStorage('todos', todos)
    }, [todos])

    const [isLogOpen, setIsLogOpen] = useState(false);

    const handleLogOpen = () => {
        setIsLogOpen(isLogOpen => !isLogOpen)
    }

    const SimpleLogInput = withLoggerSimple(InputForm)
    const SimpleLogList = withLoggerSimple(List)

    return (
        <>
            <LogDrawer open={isLogOpen} handleOpen={handleLogOpen} />

            <Layout className='layout'>
                <Header handleLogOpen={handleLogOpen} />

                <Layout className='layout'>
                    <Content style={{ padding: '10px' }}>

                        <Row>
                            <CustomCol>
                                {/* <InputForm controlTodos={[todos, handleTodos]} /> */}
                                <SimpleLogInput controlTodos={[todos, handleTodos]} />
                            </CustomCol>
                        </Row>
                        <Row>
                            <CustomCol>
                                {/* <List controlTodos={[todos, handleTodos]} /> */}
                                <SimpleLogList controlTodos={[todos, handleTodos]} />
                            </CustomCol>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

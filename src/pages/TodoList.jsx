import { Content } from 'antd/es/layout/layout'
import { Layout, Row, } from 'antd'

import { List } from '../components/todos/List'
import { InputForm } from '../components/todos/InputForm'
import { LogDrawer } from '../components/todos/LogDrawer'
import { CustomCol } from '../components/todos/CustomCol'
import { Header } from '../components/todos/Header'

import { useEffect, useState } from 'react'
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage'
import { withLogger } from '../HOC/withLogger'

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

    const [filter, setFilter] = useState(undefined);

    const hanldeFilter = (value) => {
        setFilter(value)
    }

    const SimpleLogInput = withLogger(InputForm);
    const SimpleLogList = withLogger(List);

    return (
        <>
            <LogDrawer open={isLogOpen} handleOpen={handleLogOpen} />
            <Layout className='layout'>
                <Header handleLogOpen={handleLogOpen} />
                <Layout className='layout'>
                    <Content style={{ padding: '10px' }}>
                        <Row>
                            <CustomCol>
                                <SimpleLogInput controlTodos={[todos, handleTodos]} />
                            </CustomCol>
                        </Row>
                        <Row>
                            <CustomCol>
                                <SimpleLogList controlTodos={[todos, handleTodos]} hanldeFilter={hanldeFilter} filter={filter} />
                            </CustomCol>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

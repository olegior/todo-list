
import { Link, Navigate, } from 'react-router-dom';
import { Flex, Typography } from 'antd';
import { TodosButton } from '../todos/TodosButton';
import { Form } from './Form';
import { TodosCol } from '../todos/TodosCol';
import { SubmitButton } from './SubmitButton';
import { useSelector } from 'react-redux';

export const PageForm = ({ name, fields, buttonTitle, cb, contextHolder, path }) => {
    const token = useSelector(store => store.token);
    const { Title } = Typography;

    const formText = { // /?
        login: ['Еще не зарегестрированы? ', 'Зарегистрироваться'],
        register: ['Уже есть аккаунт? ', 'Войти ']
    }
    
    const button = <TodosButton Component={SubmitButton} title={buttonTitle} />;
    const form = <Form name={name} fields={fields} button={button} cb={cb} />

    return (
        <>
            <Flex
                justify='center'
                vertical='vertical'
                style={{ height: '100dvh', padding: '10px' }}
            >
                {contextHolder}
                <TodosCol>
                    <Title level={2}>{buttonTitle}</Title>
                    {!token ? form : <Navigate to={'/'} />}
                    <Title level={5}>{formText[name][0]} <Link to={path} >{formText[name][1]}</Link></Title>
                </TodosCol>
            </Flex>
        </>
    )
}

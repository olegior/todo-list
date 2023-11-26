
import { Link, Navigate, } from 'react-router-dom';
import { Flex, Typography } from 'antd';
import { TodosButton } from '../todos/TodosButton';
import { Form } from './Form';
import { TodosCol } from '../todos/TodosCol';
import { SubmitButton } from './SubmitButton';
import { useState } from 'react';
import { getFromLocalStorage } from '../../utils/localStorage';

export const FormPage = ({ name, fields, buttonTitle, cb, contextHolder, path }) => {
    const [isLogged] = useState(getFromLocalStorage('token'));
    const { Paragraph } = Typography;

    const formText = {
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
            >
                {contextHolder}
                <TodosCol>
                    {!isLogged ? form : <Navigate to={'/'} />}
                    <Paragraph>{formText[name][0]} <Link to={path} >{formText[name][1]}</Link></Paragraph>
                </TodosCol>
            </Flex>
        </>
    )
}

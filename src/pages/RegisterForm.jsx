import { CustomForm } from '../components/todos/CustomForm';
import { CustomButton } from '../components/todos/CustomButton';
import { AddButton } from '../components/todos/AddButton';
import { Link, useNavigate } from 'react-router-dom';
import { Flex, notification } from 'antd';
import { CustomCol } from '../components/todos/CustomCol';
import { sendRequest } from '../utils/api';

export const RegisterForm = () => {

    const [api, contextHolder] = notification.useNotification();
    // const navigate = useNavigate();

    const openNotififcation = (type, msg) => {
        api[type]({
            message: msg,
            placement: 'bottom'
        })
    }

    const handleRegister = async (data) => {
        const response = await sendRequest('users/register', 'post', data);
        console.log(response);
        if (!response.success) {
            response.errors && response.errors.forEach(e => openNotififcation('error', e.msg));
            response.message && openNotififcation('error', response.message);
        }
        else {
            // navigate('/login');
            openNotififcation('success', 'Успешно зарегестрированы, перейдите на страницу авторизации.')
        }

    }

    const fields = [
        { label: 'username', name: 'username', placeholder: 'введите имя', },
        { label: 'email', name: 'email', placeholder: 'введите email', type: 'email', rule: [{ type: 'email', message: 'Заполнено некорректно!' }] },
        { label: 'password', name: 'password', placeholder: 'введите пароль', type: 'password' },
        { label: 'gender', name: 'gender', placeholder: 'выберите пол', type: 'gender' },
        { label: 'age', name: 'age', placeholder: 'введите возраст', type: 'number' },
    ];
    const button = <CustomButton Component={AddButton} action='Добавлена' title={'Зарегистрироваться'} />;
    const form = <CustomForm name="register" fields={fields} button={button} cb={handleRegister} />

    return (
        <>
            <Flex
                justify='center'
                vertical='vertical'
            >
                {contextHolder}
                <CustomCol>
                    {form}
                    <p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p>
                </CustomCol>
            </Flex>
        </>
    )
}



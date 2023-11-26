import { CustomForm } from '../components/todos/CustomForm';
import { CustomButton } from '../components/todos/CustomButton';
import { AddButton } from '../components/todos/AddButton';
import { Link } from 'react-router-dom';
import { Flex } from 'antd';
import { CustomCol } from '../components/todos/CustomCol';
import { sendRequest } from '../utils/api';
import { useNotification } from '../hooks/useNotification';


export const RegisterForm = () => {

    const [showNotification, contextHolder] = useNotification(true);

    const handleRegister = async (data) => {
        showNotification(await sendRequest('users/register', 'post', data));
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



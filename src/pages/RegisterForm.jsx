
import { Flex } from 'antd';
import { CustomForm } from '../components/todos/CustomForm';
import { CustomButton } from '../components/todos/CustomButton';
import { AddButton } from '../components/todos/AddButton';
import { Link } from 'react-router-dom';


export const RegisterForm = () => {

    const handleRegister = () => { }

    const fields = [
        { label: 'username', name: 'username', placeholder: 'введите username', type: 'text' },
        { label: 'email', name: 'email', placeholder: 'введите email', type: 'email' },
        { label: 'password', name: 'password', placeholder: 'введите пароль', type: 'password' },
        { label: 'gender', name: 'gender', placeholder: 'введите gender', type: 'text' },
        { label: 'age', name: 'age', placeholder: 'введите age', type: 'number' },
    ];
    const button = <CustomButton Component={AddButton} action='Добавлена' title={'Зарегистрироваться'} />;
    const form = <CustomForm name="register" fields={fields} button={button} cb={handleRegister} />

    return (
        <>
            <Flex justify='center'>
                <div
                    style={{
                        maxWidth: '600px', minWidth: '300px', width: '100%', 
                        // border: '1px solid black', padding: '20px', borderRadius: '10px'
                    }}>
                    {form}
                    <p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p>
                </div>
            </Flex>
        </>
    )
}

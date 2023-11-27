
import { sendRequest } from '../utils/api';
import { useNotification } from '../hooks/useNotification';
import { PageForm } from '../components/form/PageForm';


export const RegisterPage = () => {

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

    return (
        <>
            <PageForm name={'register'} fields={fields} buttonTitle={'Зарегистрироваться'} cb={handleRegister} contextHolder={contextHolder} path={'/login'} />
        </>
    )
}



import { sendRequest } from '../utils/api';
import { setToLocalStorage } from '../utils/localStorage';
import { FormPage } from '../components/form/FormPage';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../hooks/useNotification';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [showNotification, contextHolder] = useNotification();

  const handleLogin = async (data) => {
    const response = await sendRequest('auth/login', 'post', data);
    if (response?.token) {
      setToLocalStorage('token', response.token);
      navigate(0);
    }
    else {
      showNotification(response)
    }
  }

  const fields = [
    { label: 'email', name: 'email', placeholder: 'введите email', type: 'email', rule: [{ type: 'email', message: 'Заполнено некорректно!' }] },
    { label: 'password', name: 'password', placeholder: 'введите пароль', type: 'password' },
  ];

  return (
    <>
      <FormPage name={'login'} fields={fields} buttonTitle={'Войти'} cb={handleLogin} contextHolder={contextHolder} path={'/register'} />
    </>
  )
}

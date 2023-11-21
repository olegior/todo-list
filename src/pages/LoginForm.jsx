import { CustomButton } from '../components/todos/CustomButton';
import { AddButton } from '../components/todos/AddButton';

import { sendRequest } from '../utils/api';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CustomForm } from '../components/todos/CustomForm';

export const LoginForm = () => {
  const [isLogged, setIsLogged] = useState(getFromLocalStorage('token'));
  const navigate = useNavigate()

  // const handleLogin = (data) => {
  //   sendRequest('auth/login', 'post', data)
  //     .then(({ token }) => setToLocalStorage('token', [token]))
  //     .then(() => setIsLogged(true)).catch(() => setIsLogged(false));
  // }
  const handleLogin = async (data) => {
    const request = await sendRequest('auth/login', 'post', data)
    if (request.token) {
      setToLocalStorage('token', request.token);
      navigate(0);
      // setIsLogged(request.token)
    }
  }
  // переименоватьс
  const fields = [
    { label: 'email', name: 'email', placeholder: 'введите email', type: 'text' },
    { label: 'password', name: 'password', placeholder: 'введите пароль', type: 'password' },
  ];
  const button = <CustomButton Component={AddButton} action='Добавлена' title={'Войти'} />;
  const form = <CustomForm name="login" fields={fields} button={button} cb={handleLogin} />

  return (
    <>
      <div>
        {!isLogged ? form : <Navigate to='/' />}
        <p>Еще не зарегестрированы? <Link to={'/register'} >Зарегистрироваться</Link></p>
      </div>
    </>
  )
}

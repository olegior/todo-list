import { CustomButton } from '../components/todos/CustomButton';
import { AddButton } from '../components/todos/AddButton';

import { sendRequest } from '../utils/api';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CustomForm } from '../components/todos/CustomForm';
import { Flex } from 'antd';
import { CustomCol } from '../components/todos/CustomCol';
import { useNotification } from '../hooks/useNotification';

export const LoginForm = () => {
  const [isLogged] = useState(getFromLocalStorage('token'));
  const navigate = useNavigate();
  const [showNotification, contextHolder] = useNotification();

  const handleLogin = async (data) => {
    const response = await sendRequest('auth/login', 'post', data);
    if (response?.token) {
      setToLocalStorage('token', response.token);
      navigate(0);
    }
    else {
      console.log(response);
      showNotification(response)
    }
  }
  // переименоватьс
  const fields = [
    { label: 'email', name: 'email', placeholder: 'введите email', type: 'email', rule: [{ type: 'email', message: 'Заполнено некорректно!' }] },
    { label: 'password', name: 'password', placeholder: 'введите пароль', type: 'password' },
  ];
  const button = <CustomButton Component={AddButton} title={'Войти'} />;
  const form = <CustomForm name="login" fields={fields} button={button} cb={handleLogin} />

  return (
    <>
      <Flex
        justify='center'
        vertical='vertical'
      >
        {contextHolder}
        <CustomCol>
          {!isLogged ? form : <Navigate to='/' />}
          <p>Еще не зарегестрированы? <Link to={'/register'} >Зарегистрироваться</Link></p>
        </CustomCol>
      </Flex>
    </>
  )
}

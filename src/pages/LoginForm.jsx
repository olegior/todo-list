import { CustomButton } from '../components/todos/CustomButton';
import { AddButton } from '../components/todos/AddButton';

import { sendRequest } from '../utils/api';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CustomForm } from '../components/todos/CustomForm';
import { Flex, notification } from 'antd';
import { CustomCol } from '../components/todos/CustomCol';

export const LoginForm = () => {
  const [isLogged] = useState(getFromLocalStorage('token'));
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const openNotififcation = (msg) => {
    api.error({
      message: msg,
      placement: 'bottom'
    })
  }

  const handleLogin = async (data) => {
    const response = await sendRequest('auth/login', 'post', data);
    if (response?.token) {
      setToLocalStorage('token', response.token);
      navigate(0);
    }
    else {
      openNotififcation(response.message)
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

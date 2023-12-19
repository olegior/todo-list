import { PageForm } from '../components/form/PageForm';
import { useNotification } from '../hooks/useNotification';
import { userLogin } from '../store/slices/tokenSlice';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [showNotification, contextHolder] = useNotification();

  const handleLogin = async (data) => {
    dispatch(userLogin(data))
      .unwrap().catch(showNotification);
  }

  const fields = [
    {
      label: 'email', name: 'email', placeholder: 'введите email', type: 'email',
      rule: [{ type: 'email', message: 'Заполнено некорректно!' }]
    },
    { label: 'password', name: 'password', placeholder: 'введите пароль', type: 'password' },
  ];

  return (
    <>
      <PageForm name={'login'} fields={fields} buttonTitle={'Войти'} cb={handleLogin} contextHolder={contextHolder} path={'/register'} />
    </>
  )
}

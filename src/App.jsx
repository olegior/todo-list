import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginForm } from './pages/LoginForm';
import { RegisterForm } from './pages/RegisterForm';
import { Todos } from './pages/Todos';
import { getFromLocalStorage } from './utils/localStorage';
import { useState } from 'react';
import { TodosCopy } from './pages/Todoscopy';

function App() {
  const [token] = useState(getFromLocalStorage('token')); // HOC?
  const navigateToRoot = <Navigate to='login' />;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={token ? <Todos /> : navigateToRoot} errorElement={navigateToRoot} />
          <Route path='login' element={<LoginForm />} />
          <Route path='register' element={<RegisterForm />} />
          <Route path='test' element={<TodosCopy />} />
          <Route path='*' element={navigateToRoot} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

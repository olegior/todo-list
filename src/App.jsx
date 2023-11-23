import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginForm } from './pages/LoginForm';
import { RegisterForm } from './pages/RegisterForm';
import { Todos } from './pages/Todos';
import { getFromLocalStorage } from './utils/localStorage';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(getFromLocalStorage('token')); // HOC
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={token ? <Todos /> : <Navigate to='login' />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='register' element={<RegisterForm />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

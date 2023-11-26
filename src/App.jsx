import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { TodosPage } from './pages/TodosPage';
import { getFromLocalStorage } from './utils/localStorage';
import { useState } from 'react';

function App() {

  const [token] = useState(getFromLocalStorage('token'));
  const toLogin = <Navigate to='login' />;
  const toRoot = <Navigate to='/' />;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={toRoot} />
          <Route path='/' element={token ? <TodosPage /> : toLogin} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

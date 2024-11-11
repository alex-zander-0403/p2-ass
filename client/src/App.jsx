import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import axios from 'axios';
import axiosInstance, { setAccessToken } from './api/axiosInstance';
import SurpriseOnePage from './components/pages/SurpriseOnePage';
import SignUpPage from './components/pages/SignUpPage';
import LoginPage from './components/pages/LoginPage';

function App() {
  const [user, setUser] = useState({ status: 'logging' });

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then(({ data }) => {
        setTimeout(() => {
          setUser({ status: 'logged', data: data.user });
        }, 1000);
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: 'guest', data: null });
        setAccessToken('');
      });
  }, []);

  // handler на регистрацию
  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name) {
      return alert('Missing required fields');
    }
    axiosInstance.post('/auth/signup', formData).then(({ data }) => {
      setUser({ status: 'logged', data: data.user });
      setAccessToken(data.accessToken);
    });
  };

  // handler на авторизацию
  const loginHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return alert('Missing required fields');
    }
    axiosInstance.post('/auth/login', formData).then(({ data }) => {
      setUser({ status: 'logged', data: data.user });
      setAccessToken(data.accessToken);
    });
  };

  // handler на logout
  const logoutHandler = () => {
    axiosInstance
      .get('/auth/logout')
      .then(() => setUser({ status: 'guest', data: null }));
  };

  //
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout logoutHandler={logoutHandler} user={user} />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/signup',
          element: <SignUpPage signUpHandler={signUpHandler} />,
        },
        {
          path: '/login',
          element: <LoginPage loginHandler={loginHandler} />,
        },
        {
          path: '/onesurprise/:surpriseId',
          element: <SurpriseOnePage user={user}/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

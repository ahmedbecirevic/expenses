import { Navigate, useRoutes } from 'react-router-dom';
import Expenses from './components/Expenses/Expenses';
import Login from './components/Login';
import Profile from './components/Profile';

import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <PrivateLayout />,
      children: [
        { path: '/', element: <Expenses /> },
        { path: 'profile', element: <Profile /> },
      ],
    },
    {
      path: '/sign-in',
      element: <PublicLayout />,
      children: [
        { path: '', element: <Login /> },
      ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ]);
}

import {createBrowserRouter} from 'react-router-dom';
import Page from './components/RootPage';
import Home from './components/Home';
import About from './components/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error from './pages/Error';

export const router = createBrowserRouter ([
  {
    path: '/',
    element: <Page />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

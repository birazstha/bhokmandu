import {createBrowserRouter} from 'react-router-dom';
import Page from './components/Page';
import Home, {cuisineLoader} from './components/Home';
import About from './components/About';
import Login from './pages/Login';
import Profile from './pages/Profile';

export const router = createBrowserRouter ([
  {
    path: '/',
    element: <Page />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: cuisineLoader,
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

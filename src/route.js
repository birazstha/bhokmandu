import {createBrowserRouter} from 'react-router-dom';
import Page from './components/RootPage';
import Home from './components/Home';
import About from './components/About';
import Login from './pages/Login';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error';
import ProfileRootPage from './pages/Profile/ProfileRootPage';
import OrderHistory from './pages/Profile/OrderHistory';
import Favorites from './pages/Profile/Favorites';

export const router = createBrowserRouter ([
  {
    path: '/',
    element: <Page />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'profile',
        element: <ProfileRootPage />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: 'orders',
            element: <OrderHistory />,
          },
          {
            path: 'favorites',
            element: <Favorites />,
          },
        ],
      },
    ],
  },
]);

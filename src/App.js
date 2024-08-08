import {RouterProvider} from 'react-router-dom';
import {router} from './route';
import ProfileContextProvider from './context/profile-context';
import 'rsuite/dist/rsuite-no-reset.min.css';
import CartContextProvider from './context/cart';

function App () {
  return (
    <ProfileContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ProfileContextProvider>
  );
}

export default App;

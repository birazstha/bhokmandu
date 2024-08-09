import {RouterProvider} from 'react-router-dom';
import {router} from './route';
import ProfileContextProvider from './context/profile-context';
import 'rsuite/dist/rsuite-no-reset.min.css';
import CartContextProvider from './context/cart';
import ThemeContextProvider from './context/theme-cart';

function App () {
  return (
    <ProfileContextProvider>
      <CartContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </CartContextProvider>
    </ProfileContextProvider>
  );
}

export default App;

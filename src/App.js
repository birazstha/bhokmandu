import {RouterProvider} from 'react-router-dom';
import {router} from './route';
import ProfileContextProvider from './context/profile-context';
import 'rsuite/dist/rsuite-no-reset.min.css';


function App () {
  return (
    <ProfileContextProvider>
      <RouterProvider router={router} />
    </ProfileContextProvider>
  );
}

export default App;

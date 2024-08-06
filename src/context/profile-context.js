import {jwtDecode} from 'jwt-decode';
import {createContext, useEffect, useState} from 'react';
import {fetchProfile, userLogin} from '../api';
import toast from 'react-hot-toast';

export const ProfileContext = createContext ({
  profile: null,
  login: () => {},
  loading: true,
  logout: () => {},
});

export default function ProfileContextProvider({children}) {
  const [profile, setProfile] = useState (null);
  const [loading, setLoading] = useState (true);

  const login = async (response, navigate) => {
    const {credential} = response;
    const data = jwtDecode (credential);
    const finalData = {
      id: data.sub,
      name: data.name,
      email: data.email,
      profile_picture: data.picture,
    };

    try {
      const profileRes = await userLogin (finalData);
      setProfile (profileRes);
      navigate ('/profile');
    } catch (error) {
      console.error ('Error logging in:', error);
    }
  };

  //Fetching profile data when freshly reloaded.
  const refreshProfile = async () => {
    const accessToken = localStorage.getItem ('accessToken');
    try {
      const profileRes = await fetchProfile (accessToken);
      setProfile (profileRes);
      setLoading (false);
    } catch (err) {
      console.log (err);
    }
  };

  const logout = () => {
    localStorage.removeItem ('accessToken');
    setProfile (null);
    //toast message
    toast.success ('Logout successful');
    //redirect to homepage
    window.location.href = '/';
  };

  useEffect (() => {
    refreshProfile ();
  }, []);

  return (
    <ProfileContext.Provider value={{profile, login, loading, logout}}>
      {children}
    </ProfileContext.Provider>
  );
}

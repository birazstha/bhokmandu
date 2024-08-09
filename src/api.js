import axios from 'axios';
import {json} from 'react-router-dom';
const baseUrl = process.env.REACT_APP_URL;

export const fetchProfile = async accessToken => {
  try {
    const resData = await axios.get (`${baseUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken} `,
      },
    });

    return resData.data.data;
  } catch (err) {
    console.log (err);
  }
};

export const userLogin = async finalData => {
  try {
    const res = await axios.post (`${baseUrl}/googleLogin`, finalData);
    const accessToken = res.data.data.accessToken;
    localStorage.setItem ('accessToken', accessToken);
    return await fetchProfile (accessToken);
  } catch (err) {
    console.log (err);
  }
};

export const loadCuisines = async keyword => {
  try {
    const resData = await axios.get (`${baseUrl}/cuisines?keyword=${keyword}`);
    return resData.data.data;
  } catch (err) {
    console.log (err);
    if (err.code === 'ERR_NETWORK' && !err.response) {
      console.log ('Network error: Could not connect to the server.');
      throw json ({message: "Couldn't fetch cuisines."}, {status: 500});
    }
    if (err.status && err.status === 500) {
      throw json ({message: "Couldn't fetch cuisines."}, {status: 500});
    }
  }
};

export const foodList = async () => {
  try {
    const resData = await axios.get (`${baseUrl}/cuisines`);
    const cuisines = resData.data.data;
    const titles = cuisines.map (cuisine => cuisine.title);
    return titles;
  } catch (err) {
    console.log (err);
  }
};

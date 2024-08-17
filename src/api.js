import { json } from "react-router-dom";
import Cookies from "js-cookie";

import Axios, { AxiosWithAuth } from "./axios";

export const fetchProfile = async () => {
  try {
    const resData = await AxiosWithAuth.get("profile");
    return resData.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = async (finalData) => {
  try {
    const res = await Axios.post("googleLogin", finalData);
    const accessToken = res.data.data.accessToken;
    Cookies.set("accessToken", accessToken, { expires: 7 });
    AxiosWithAuth.defaults.headers.Authorization = `Bearer ${accessToken}`;
    return await fetchProfile();
  } catch (err) {
    console.log(err);
  }
};

export const loadCuisines = async (keyword) => {
  try {
    const resData = await Axios.get(`cuisines?keyword=${keyword}`);
    return resData.data.data;
  } catch (err) {
    console.log(err);
    if (err.code === "ERR_NETWORK" && !err.response) {
      console.log("Network error: Could not connect to the server.");
      throw json({ message: "Couldn't fetch cuisines." }, { status: 500 });
    }
    if (err.status && err.status === 500) {
      throw json({ message: "Couldn't fetch cuisines." }, { status: 500 });
    }
  }
};

export const foodList = async () => {
  try {
    const resData = await Axios.get("cuisines");
    const cuisines = resData.data.data;
    const titles = cuisines.map((cuisine) => cuisine.title);
    return titles;
  } catch (err) {
    console.log(err);
  }
};

export const loadUsers = async () => {
  try {
    const resData = await Axios.get("users");
    return resData.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const checkoutApi = async (values, cart) => {
  try {
    const data = {
      cuisines: cart,
      total_amount: cart.reduce((a, b) => a + b.grand_total, 0),
      payment_method: values.payment_method,
      delivery_address: values.delivery_address,
      special_instructions: values.special_instructions,
    };
    const resData = await AxiosWithAuth.post("order", data);
    return resData.status;
  } catch (err) {
    console.log(err);
  }
};

export const ordersApi = async () => {
  try {
    const resData = await AxiosWithAuth.get("order-list");

    return resData.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const orderDetailApi = async (id) => {
  try {
    const resData = await AxiosWithAuth.get(`order/${id}`);
    console.log(resData.data.data);
    return resData.data.data;
  } catch (err) {
    console.log(err);
  }
};

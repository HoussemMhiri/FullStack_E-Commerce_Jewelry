import axios from "axios";
import {
  ADD_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  DELETE_PRODUCT_SAVED,
  GET_ONE_PRODUCT,
  GET_ONE_PRODUCT_FAILED,
  GET_ONE_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  TOGGLE_PRODUCT_SAVED,
  UPDATE_PRODUCT_CART,
} from "./actionTypes";

//PRODUCTS ACTION

export const getProducts = (cat) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PRODUCTS,
  });
  try {
    const { data } = await axios.get(`/api/products?category=${cat}`, config);
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAILED,
      payload: error.response.data,
    });
  }
};

//ONE PRODUCT ACTION

export const getOneProduct = (id) => async (dispatch) => {
  dispatch({
    type: GET_ONE_PRODUCT,
  });

  try {
    const { data } = await axios.get(`/api/products/find/${id}`);
    dispatch({
      type: GET_ONE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ONE_PRODUCT_FAILED,
      payload: error.response.data,
    });
  }
};

//ADD PRODUCT TO CART ACTION

export const addToCart = (product, size, productQuantity, price) => {
  return {
    type: ADD_PRODUCT_CART,
    payload: {
      product: product,
      size: size,
      productQuantity: productQuantity,
      price: price,
    },
  };
};
export const deleteFromoCart = (id) => {
  return {
    type: DELETE_PRODUCT_CART,
    payload: id,
  };
};

export const updateProdQunatity = (id, value) => {
  return {
    type: UPDATE_PRODUCT_CART,
    payload: {
      prodId: id,
      quantityChange: value,
    },
  };
};

// AUTH ACTIONS

export const registerUser = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });

  try {
    const { data } = await axios.post("/api/auth/register", newUser);
    localStorage.setItem("token", data.token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILED,
      payload: error.response.data,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });

  try {
    const { data } = await axios.post("/api/auth/login", user);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response.data,
    });
  }
};

//SAVED PRODUCT ACTIONS

export const toggleSavedProduct = (id, imgs, descProd, price) => {
  return {
    type: TOGGLE_PRODUCT_SAVED,
    payload: {
      id,
      imgs,
      descProd,
      price,
    },
  };
};

export const deleteSavedProduct = (id) => {
  return {
    type: DELETE_PRODUCT_SAVED,
    payload: id,
  };
};

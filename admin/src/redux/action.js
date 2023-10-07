import {
  INCOME,
  INCOME_FAILED,
  INCOME_SUCCESS,
  LOGIN_ADMIN,
  LOGIN_ADMIN_FAILED,
  LOGIN_ADMIN_SUCCESS,
  ORDERS,
  ORDERS_APPROVED_FAILED,
  ORDERS_APPROVED_SUCCESS,
  ORDERS_DELETE_FAILED,
  ORDERS_DELETE_SUCCESS,
  ORDERS_FAILED,
  ORDERS_SUCCESS,
  PRODUCTS,
  PRODUCTS_ADD,
  PRODUCTS_ADD_FAILED,
  PRODUCTS_ADD_SUCCESS,
  PRODUCTS_DELETE,
  PRODUCTS_DELETE_FAILED,
  PRODUCTS_DELETE_SUCCESS,
  PRODUCTS_FAILED,
  PRODUCTS_SUCCESS,
  PRODUCTS_UPDATE,
  PRODUCTS_UPDATE_FAILED,
  PRODUCTS_UPDATE_SUCCESS,
  USERS,
  USERS_DELETE_FAILED,
  USERS_DELETE_SUCCESS,
  USERS_FAILED,
  USERS_SUCCESS,
} from "./actionTypes";
import axios from "axios";

// LOGIN

export const loginAdmin = (adminUser) => async (dispatch) => {
  dispatch({
    type: LOGIN_ADMIN,
  });

  try {
    const { data } = await axios.post("/api/auth/login", adminUser);

    dispatch({
      type: LOGIN_ADMIN_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: LOGIN_ADMIN_FAILED,
      payload: error.response.data,
    });
  }
};

// USERS ACTIONS

export const getUsers = () => async (dispatch) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
  ).admin.token;

  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: USERS,
  });

  try {
    const { data } = await axios.get("/api/users?new=true", config);
    dispatch({
      type: USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USERS_FAILED,
      payload: error.response.data,
    });
  }
};

// DELETE USER ACTION

export const deleteUsers = (id) => async (dispatch) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
  ).admin.token;
  const config = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const { data } = await axios.delete(`/api/users/${id}`, config);
    dispatch({
      type: USERS_DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: USERS_DELETE_FAILED,
      payload: error.response.data,
    });
  }
};

// ORDERS ACTIONS

export const getOrders = () => async (dispatch) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
  ).admin.token;
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: ORDERS,
  });

  try {
    const { data } = await axios.get("/api/orders?new=true", config);
    dispatch({
      type: ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDERS_FAILED,
      payload: error.response.data,
    });
  }
};

// ORDER DELETE ACTION:

export const deleteOrders = (id) => async (dispatch) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
  ).admin.token;
  const config = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const { data } = await axios.delete(`/api/orders/${id}`, config);
    dispatch({
      type: ORDERS_DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ORDERS_DELETE_FAILED,
      payload: error.response.data,
    });
  }
};

// ORDER UPDATE ACTION:
export const updateOrders = (updOrder) => async (dispatch) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
  ).admin.token;
  const config = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const { data } = await axios.put(
      `/api/orders/${updOrder._id}`,
      updOrder,
      config
    );
    dispatch({
      type: ORDERS_APPROVED_SUCCESS,
      payload: updOrder,
    });

    console.log(data);
  } catch (error) {
    dispatch({
      type: ORDERS_APPROVED_FAILED,
      payload: error.response.data,
    });
  }
};

// INCOME ACTIONS

export const getIncome = () => async (dispatch) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
  ).admin.token;
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: INCOME,
  });

  try {
    const { data } = await axios.get("/api/orders/income", config);
    dispatch({
      type: INCOME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INCOME_FAILED,
      payload: error.response,
    });
  }
};

// PRODUCTS ACTIONS

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCTS,
  });

  try {
    const { data } = await axios.get("/api/products");
    dispatch({
      type: PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILED,
      payload: error.response.data,
    });
  }
};

// PRODUCT DELETE

export const deleteProducts = (id) => async (dispatch) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
  ).admin.token;
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: PRODUCTS_DELETE,
  });

  try {
    const { data } = await axios.delete(`/api/products/${id}`, config);
    dispatch({
      type: PRODUCTS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_DELETE_FAILED,
      payload: error.response.data,
    });
  }
};
// PRODUCT UPDATE

export const updateProducts = (updProd) => async (dispatch) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
  ).admin.token;
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: PRODUCTS_UPDATE,
  });

  try {
    console.log(config);
    const { data } = await axios.put(
      `/api/products/${updProd._id}`,
      updProd,
      config
    );
    dispatch({
      type: PRODUCTS_UPDATE_SUCCESS,
      payload: updProd,
    });

    console.log(data);
  } catch (error) {
    dispatch({
      type: PRODUCTS_UPDATE_FAILED,
      payload: error.response.data,
    });
  }
};

// PRODUCT ADD

export const addProducts = (newProd) => async (dispatch) => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
  ).admin.token;
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: PRODUCTS_ADD,
  });

  try {
    const { data } = await axios.post(`/api/products`, newProd, config);
    dispatch({
      type: PRODUCTS_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ADD_FAILED,
      payload: error.response.data,
    });
  }
};

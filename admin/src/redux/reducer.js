import {
  INCOME,
  INCOME_FAILED,
  INCOME_SUCCESS,
  LOGIN_ADMIN,
  LOGIN_ADMIN_FAILED,
  LOGIN_ADMIN_SUCCESS,
  ORDERS,
  ORDERS_APPROVED_SUCCESS,
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
  USERS_DELETE_SUCCESS,
  USERS_FAILED,
  USERS_SUCCESS,
} from "./actionTypes";

// ADMIN REDUCER

const initAdmin = {
  admin: null,
  loading: false,
  errors: null,
  auth: false,
};

export const adminReducer = (state = initAdmin, { type, payload }) => {
  switch (type) {
    case LOGIN_ADMIN:
      return { ...state, loading: true };

    case LOGIN_ADMIN_SUCCESS:
      return { ...state, loading: false, admin: payload, auth: true };

    case LOGIN_ADMIN_FAILED:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};

// USERS REDUCER

const initUsers = {
  users: null,
  loading: false,
  errors: null,
};

export const userReducer = (state = initUsers, { type, payload }) => {
  switch (type) {
    case USERS:
      return { ...state, loading: true };

    case USERS_SUCCESS:
      return { ...state, loading: false, users: payload };
    case USERS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((el) => el._id !== payload),
      };

    case USERS_FAILED:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};

// ORDERS REDUCER

const initOrders = {
  orders: null,
  loading: false,
  errors: null,
};

export const ordersReducer = (state = initOrders, { type, payload }) => {
  switch (type) {
    case ORDERS:
      return { ...state, loading: true };

    case ORDERS_SUCCESS:
      return { ...state, loading: false, orders: payload };
    case ORDERS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state.orders.filter((el) => el.userId !== payload),
      };
    case ORDERS_APPROVED_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state.orders.map((el) =>
          el._id === payload._id ? { ...el, ...payload } : el
        ),
      };

    case ORDERS_FAILED:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};

// INCOME REDUCER

const initIncome = {
  income: [],
  loading: false,
  errors: null,
  perc: 0,
  sales: [],
};

export const incomeReducer = (state = initIncome, { type, payload }) => {
  switch (type) {
    case INCOME:
      return { ...state, loading: true };

    case INCOME_SUCCESS:
      const greaterIncome = payload.reduce((pre, curr) => {
        return pre._id > curr._id ? pre : curr;
      });
      const lesserIncome = payload.reduce((pre, curr) => {
        return pre._id < curr._id ? pre : curr;
      });
      return {
        ...state,
        loading: false,
        income: payload,
        perc: (greaterIncome.total * 100) / (lesserIncome.total * 100),
        sales: [
          {
            salesNum: greaterIncome.total - lesserIncome.total,
            salesPerc: (greaterIncome.total * 100) / (lesserIncome.total * 100),
          },
        ],
      };

    case INCOME_FAILED:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};

// PRODUCTS REDUCER

const initProducts = {
  products: [],
  loading: false,
  errors: null,
};

export const productsReducer = (state = initProducts, { type, payload }) => {
  switch (type) {
    case PRODUCTS:
    case PRODUCTS_DELETE:
    case PRODUCTS_UPDATE:
    case PRODUCTS_ADD:
      return { ...state, loading: true };

    case PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case PRODUCTS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        products: {
          ...state,
          products: state.products.filter((el) => el._id !== payload),
        },
      };
    case PRODUCTS_UPDATE_SUCCESS:
      return {
        ...state,
        products: state.products.map((el) =>
          el._id === payload._id ? { ...el, ...payload } : el
        ),
      };
    case PRODUCTS_ADD_SUCCESS:
      return { ...state, products: [...state.products, payload] };

    case PRODUCTS_FAILED:
    case PRODUCTS_DELETE_FAILED:
    case PRODUCTS_UPDATE_FAILED:
    case PRODUCTS_ADD_FAILED:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};

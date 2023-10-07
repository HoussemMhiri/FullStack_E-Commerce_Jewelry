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

// PRODUCTS REDUCER

const initState = {
  products: [],
  errors: null,
  loading: false,
  product: null,
};

export const productsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
    case GET_ONE_PRODUCT:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: payload };
    case GET_ONE_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: payload };
    case GET_PRODUCTS_FAILED:
    case GET_ONE_PRODUCT_FAILED:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};

// CART REDUCER

const init = {
  products: [],
  cartQuantity: 0,
  total: 0,
};

export const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_CART:
      return {
        ...state,
        cartQuantity: state.cartQuantity + 1,
        products: [
          ...state.products,
          {
            product: payload.product,
            size: payload.size,
            productQuantity: payload.productQuantity,
          },
        ],
        total: state.total + payload.price * payload.productQuantity,
      };
    case DELETE_PRODUCT_CART:
      const deletedProduct = state.products.find(
        (el) => el.product._id === payload
      );

      if (!deletedProduct) {
        return state;
      }

      return {
        ...state,
        products: state.products.filter((el) => el.product._id !== payload),
        cartQuantity: state.cartQuantity - 1,
        total:
          state.total -
          deletedProduct.product.price * deletedProduct.productQuantity,
      };
    case UPDATE_PRODUCT_CART:
      const updatedProduct = state.products.map((el) => {
        if (el.product._id === payload.prodId) {
          const newQuantity = Math.max(
            1,
            el.productQuantity + payload.quantityChange
          );
          return { ...el, productQuantity: newQuantity };
        } else {
          return el;
        }
      });
      const updatedTotal = updatedProduct.reduce(
        (total, el) => total + el.product.price * el.productQuantity,
        0
      );
      return {
        ...state,
        products: updatedProduct,
        total: updatedTotal,
      };

    default:
      return state;
  }
};

// AUTH REDUCER

const initAuth = {
  users: null,
  loading: false,
  errors: null,
  /*  auth: false, */
};

export const authReducer = (state = initAuth, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, loading: false, users: payload };
    case REGISTER_FAILED:
    case LOGIN_FAILED:
      return { ...state, loading: false, errors: payload };

    default:
      return state;
  }
};

// SAVED PRODUCTS REDUCER :

const initSaved = {
  products: [],
  savedQtity: 0,
};

export const savedReducer = (state = initSaved, { type, payload }) => {
  switch (type) {
    case TOGGLE_PRODUCT_SAVED:
      const productIndex = state.products.findIndex(
        (product) => product.id === payload.id
      );

      if (productIndex !== -1) {
        // If the product is already in the state, remove it
        const updatedProducts = [...state.products];
        updatedProducts.splice(productIndex, 1);

        return {
          ...state,
          savedQtity: state.savedQtity - 1,
          products: updatedProducts,
        };
      } else {
        // If the product is not in the state, add it
        return {
          ...state,
          savedQtity: state.savedQtity + 1,
          products: [
            ...state.products,
            {
              id: payload.id,
              imgs: payload.imgs,
              descProd: payload.descProd,
              price: payload.price,
            },
          ],
        };
      }
    case DELETE_PRODUCT_SAVED:
      return {
        ...state,
        products: state.products.filter((el) => el.id !== payload),
        savedQtity: state.savedQtity - 1,
      };

    default:
      return state;
  }
};

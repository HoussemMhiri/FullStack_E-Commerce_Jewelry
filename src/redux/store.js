import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key", // the key for your storage
  storage, // the storage engine
  // You can configure more options here, like whitelist or blacklist specific reducers
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk), devTools)
);
const persistor = persistStore(store);
export default store;
export { persistor };

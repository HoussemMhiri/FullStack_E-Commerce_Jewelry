import "./App.css";
import Home from "./components/homePage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleProdPage from "./components/singleProdPage/SingleProdPage";
import ProductsPage from "./components/productsPage/ProductsPage";
import SavedProdPage from "./components/savedProdPage/SavedProdPage";
import RegisterPage from "./components/registerPageComp/RegisterPage";
import LoginPage from "./components/loginPage/LoginPage";
import ShoppingCartPage from "./components/shoppingCartPage/ShoppingCartPage";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import SuccessPage from "./components/stripeRelated/succPage/SuccessPage";
import { useSelector } from "react-redux";
import ClientCare from "./components/clientCare/ClientCare";
import AskExpert from "./components/clientCare/contactUs/AskExpert";

function App() {
  const { users } = useSelector((state) => state.authReducer);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/product/:id" element={<SingleProdPage />} />

          <Route
            path="/cart"
            element={
              !users?.token ? <Navigate to={"/login"} /> : <ShoppingCartPage />
            }
          />

          <Route
            path="/saved"
            element={
              !users?.token ? <Navigate to={"/login"} /> : <SavedProdPage />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/care" element={<ClientCare />} />
          <Route path="/askExpert" element={<AskExpert />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

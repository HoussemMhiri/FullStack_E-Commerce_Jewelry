import "./App.css";
import Home from "./components/pages/home/Home";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";
import LoginAdmin from "./components/pages/login/LoginAdmin";
import CustomLayout from "./components/pages/customLayout/CustomLayout";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { admin, auth } = useSelector((state) => state.adminReducer);

  return (
    <BrowserRouter>
      {auth && admin.user.isAdmin ? (
        <CustomLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </CustomLayout>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;

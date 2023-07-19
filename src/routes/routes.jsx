import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Home } from "../pages/Home/home";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { CartPage } from "../pages/CartPage/CartPage";
import { Login } from "../pages/Login/Login";

const AppRoutes = () => {
  const ProtectedRoutes = () => {
    const tokenUser = localStorage.getItem("@context-amaro:token");
    if (tokenUser) return <Outlet />;

    return <Navigate to={"/login"} replace />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:name" element={<ProductPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

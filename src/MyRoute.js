import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Deals from "./pages/Deals";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/auth/SignIn";
import Signup from "./pages/auth/Signup";
import Confirm from "./pages/auth/Confirm";

import PrivateRoute from "./pages/auth/PrivateRoute";
import AdminRoute from "./pages/auth/AdminRoute";
import UserDashboard from "./pages/auth/UserDashboard";
import ResetPassword from "./pages/auth/ResetPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddCategory from "./pages/admin/AddCategory";
import AddProduct from "./pages/admin/AddProduct";
import AllProducts from "./pages/admin/AllProducts";
import ProductDetail from "./pages/ProductDetail";

const MyRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/productdetails/:productId" element={<ProductDetail/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forget/password" element={<ForgetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/email/confirmation/:token" element={<Confirm />} />
          <Route path="/reset/password/:token" element={<ResetPassword />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/user/profile" element={<UserDashboard />} />
          </Route>
          {/* ADMIN */}

          <Route path="/" element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/addcategory" element={<AddCategory />} />
            <Route path="/admin/addproduct" element={<AddProduct />} />
            <Route path="/admin/allproducts" element={<AllProducts />} />


          </Route>


        </Routes>
      </Router>
    </>
  );
};

export default MyRoute;

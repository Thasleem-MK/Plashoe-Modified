import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./HomePage.jsx/Home";
import Men from "./Men/Men";
import Women from "./Women/women";
import Collection from "./Collection/Collection";
import LookBook from "./LookBook/LookBook";
import Sale from "./Sale/Sale";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import { Context } from "./UseContext/Context";
import Register from "./Registeration/Register";
import { ProdectData } from "./DataBase/ProdectData";
import { UserData } from "./DataBase/UserData";
import { AdminData } from "./DataBase//AdminData";
import Copyrightfooter from "./CopyRight/Copyright";
import AdminHome from "./Admin/Home/HomePage";
import AdminLogin from "./Admin/AdminLogin/AdminLogin";
import UsersDetails from "./Admin/UsersDetails/UsersDetails";
import ShowProducts from "./Admin/Products/ShowProducts";
import EachPerson from "./Admin/UsersDetails/EachPerson";
import Payment from "./Payment/Payment";
import PaymentCancel from "./Payment/PaymentCancel";

function Main() {
  const [login, setLogin] = useState(false); 
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(false);
  const [logedUser, setLogedUser] = useState({});
  const [productData, setProductData] = useState(ProdectData);
  const [userData, setUserData] = useState(UserData);
  const [cartBillAmount, setCartBillAmount] = useState(0);
  const [adminData, setAdminData] = useState(AdminData);

  return (
    <>
      <Context.Provider
        value={{
          login,
          setLogin,
          search,
          setSearch,
          cart,
          setCart,
          logedUser,
          setLogedUser,
          productData,
          setProductData,
          userData,
          setUserData,
          cartBillAmount,
          setCartBillAmount,
          adminData,
          setAdminData,
        }}
      >
        <div>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route path="/" element={<Home />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/lookbook" element={<LookBook />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment/cancel" element={<PaymentCancel />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/usersdeatails" element={<UsersDetails />} />
            <Route path="/admin/productsdeatails" element={<ShowProducts />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/usersdeatails/:ID" element={<EachPerson />} />
          </Routes>
        </div>
      </Context.Provider>
      <Copyrightfooter />
    </>
  );
}

export default Main;

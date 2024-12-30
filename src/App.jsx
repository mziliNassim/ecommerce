import React from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Registrer";

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/user/Cart";
import Products from "./pages/Products";
import Favorite from "./pages/Favorite";
import Product from "./pages/Product";

const App = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <div className={theme}>
        <div className="min-h-screen overflow-x-hidden w-full flex flex-col justify-between bg-white text-black dark:text-white dark:bg-gray-900">
          <NavBar />
          <Routes>
            <Route path="/" element=<Home /> />
            <Route path="/product/:id" element=<Product /> />

            <Route path="/products">
              <Route path="" element=<Products /> />
              <Route path=":categorie" element=<Products /> />
            </Route>

            <Route path="/favorite">
              <Route path="" element=<Favorite /> />
              <Route path=":categorie" element=<Favorite /> />
            </Route>

            {/* <Route path="/auth">
                <Route path="login" element=<Login /> />
                <Route path="register" element=<Register /> />
              </Route> */}

            <Route path="/user">
              <Route path="cart" element=<Cart /> />
            </Route>

            <Route path="*" element=<NotFound /> />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import NavBar from "./components/navBar/NavBar";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Registrer";
import Footer from "./components/footer/Footer";

import Cart from "./pages/user/Cart";
import Products from "./pages/Products";
import Favorite from "./pages/Favorite";
import Loding from "./components/Loding";
import Product from "./pages/Product";

function App() {
  const [loading, setLoading] = useState(true);
  const { theme } = useSelector((state) => state.theme);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location]);

  return (
    <>
      <div className={theme}>
        <div className="min-h-screen overflow-x-hidden w-full flex flex-col justify-between bg-white text-black dark:text-white dark:bg-gray-900">
          {loading && <Loding />}
          <NavBar />
          <Routes>
            <Route path="/" element=<Home /> />
            <Route path="/about" element=<About /> />
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
              {/* <Route path="favorites" element=<Favorites /> /> */}
            </Route>

            <Route path="*" element=<NotFound /> />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";

const NavBar = () => {
  const { theme, mainColor } = useSelector((state) => state.theme);
  const { cart, favorite } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <nav
        className={`fixed z-50 top-0 left-0 right-0 backdrop:blur-lg shadow-buttom bg-white dark:bg-gray-900 `}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* app logo */}
          <Link
            to="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <span
              style={{ color: mainColor }}
              className="self-center text-4xl font-semibold whitespace-nowrap text-gray-900 dark:text-gray-100 "
            >
              E-commerce-Redux!
            </span>
          </Link>

          <div className="flex items-center gap-5">
            {/* user && toggle btn */}
            <div className="flex relative items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {/* user */}
              <span
                onClick={() => dispatch(toggleTheme())}
                className="cursor-pointer py-1.5 px-2 ml-0 text-xl border border-gray-200 dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-200 dark:hover:text-white"
              >
                {theme === "dark" ? (
                  <i className="bi bi-brightness-high"></i>
                ) : (
                  <i className="bi bi-moon"></i>
                )}
              </span>

              {/* toggle btn */}
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-user"
            >
              <ul className="navLinks flex flex-col items-center w- font-medium p-4 md:p-0 mt-4 bg-transparent dark:md:bg-transparent rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white ">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 capitalize px-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent  md:p-0 dark:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="block py-2 capitalize px-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent  md:p-0 dark:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="block relative py-2 capitalize px-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent  md:p-0 dark:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    to="/favorite"
                  >
                    favorite
                    {favorite.length > 0 && (
                      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                        {favorite.length}
                      </div>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="block relative py-2 capitalize px-3 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent  md:p-0 dark:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    to="/user/cart"
                  >
                    <i className="bi bi-cart text-lg"></i>
                    {cart.length > 0 && (
                      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                        {cart.length}
                      </div>
                    )}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

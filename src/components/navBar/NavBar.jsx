import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";
import { setLogout } from "../../features/userSlice";

const NavBar = () => {
  const { theme, mainColor } = useSelector((state) => state.theme);
  const { user, cart, favorite } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/auth/login");
  };

  return (
    <>
      <nav
        className={`fixed z-50 top-0 left-0 right-0 backdrop:blur-lg shadow-buttom bg-white dark:bg-gray-900 `}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          {/* app logo */}
          <Link
            to="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <span
              style={{ color: mainColor }}
              className="self-center text-4xl font-semibold text-gray-900 whitespace-nowrap dark:text-gray-100 "
            >
              E-commerce-Redux!
            </span>
          </Link>

          <div className="flex items-center gap-5">
            {/* user && toggle btn */}
            <div className="relative flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
              <span
                onClick={() => dispatch(toggleTheme())}
                className="cursor-pointer py-1.5 px-2 ml-0 text-xl border border-gray-200 dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-200 dark:hover:text-white me-3"
              >
                {theme === "dark" ? (
                  <i className="bi bi-brightness-high"></i>
                ) : (
                  <i className="bi bi-moon"></i>
                )}
              </span>

              {/* user */}
              {!user ? (
                <Link
                  to="/auth/login"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </Link>
              ) : (
                <div className="flex items-center gap-1">
                  <div class="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
                      {user?.username}
                    </span>
                  </div>

                  <button
                    type="buttton"
                    onClick={handleLogout}
                    class=" underline hover:text-blue-500"
                  >
                    Logout
                  </button>
                </div>
              )}

              {/* toggle btn */}
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              <ul className="flex flex-col items-center p-4 mt-4 font-medium text-white bg-transparent rounded-lg navLinks w- md:p-0 dark:md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <NavLink
                    to="/"
                    className="block px-3 py-2 text-gray-700 capitalize rounded hover:bg-gray-200 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="block px-3 py-2 text-gray-700 capitalize rounded hover:bg-gray-200 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                {user && (
                  <>
                    <li>
                      <NavLink
                        className="relative block px-3 py-2 text-gray-700 capitalize rounded hover:bg-gray-200 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
                        className="relative block px-3 py-2 text-gray-700 capitalize rounded hover:bg-gray-200 md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        to="/user/cart"
                      >
                        <i className="text-lg bi bi-cart"></i>
                        {cart.length > 0 && (
                          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                            {cart.length}
                          </div>
                        )}
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

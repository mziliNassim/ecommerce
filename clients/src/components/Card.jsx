import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { remouveProduct, setCart, toggleFavorite } from "../features/userSlice";

const Card = ({ product }) => {
  const { mainColor } = useSelector((state) => state.theme);
  const { user, cart, favorite } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cartIds, setCartIds] = useState([]);

  useEffect(() => {
    const ids = cart.map((product) => product.id);
    setCartIds(ids);
  }, [cart]);

  const favorteToggle = () => {
    if (user) {
      dispatch(toggleFavorite(product.id));
    } else navigate("/auth/login");
  };

  const productToggleInCart = () => {
    if (user) {
      cartIds.includes(product.id)
        ? dispatch(remouveProduct(product.id))
        : dispatch(setCart(product));
    } else navigate("/auth/login");
  };

  return (
    <>
      <div className="flex backdrop:blur-lg transition-all h-[100%] flex-col justify-between p-5 hover:rounded bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-transparent hover:scale-105 relative">
        {/* sold out */}
        {!product.avilable && (
          <div
            style={{ background: mainColor }}
            className="absolute top-0 left-0 z-40 px-5 py-2 font-bold text-md rounded-br-3xl w-fit"
          >
            Sold Out
          </div>
        )}

        <div className=" relative flex flex-col h-[100%] justify-between">
          {/* favorite icon */}
          <i
            onClick={favorteToggle}
            className="absolute top-0 right-0 text-2xl text-gray-400 cursor-pointer bi bi-star-fill dark:text-gray-400"
            style={{
              color: favorite.includes(product.id) && "#FFD700",
              display: product.avilable ? "block" : "none",
            }}
          ></i>

          <Link className="" to={`/product/${product.id}`}>
            <img
              className="mb-3 rounded"
              loading="lazy"
              src={`../img/products/${product.picture}`}
              alt=""
            />

            <h5 className="mb-3 font-semibold tracking-tight text-gray-900 uppercase text-md dark:text-white">
              {product.title}
            </h5>

            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
              {product.categorie}
            </p>
          </Link>

          <div className="relative flex flex-col w-full font-semibold">
            <div className="">
              <div>
                <div className="text-xl text-gray-700 dark:text-gray-400">
                  {product.price} Dh
                </div>
                <div className="text-sm text-gray-600 line-through dark:text-gray-500 ">
                  {(product.price + product.price * 0.1).toFixed(2)} Dh
                </div>
              </div>

              <button
                onClick={productToggleInCart}
                style={{
                  color: cartIds.includes(product.id) ? "red" : mainColor,
                  background: cartIds.includes(product.id) ? "red" : mainColor,
                  display: product.avilable ? "flex" : "none",
                }}
                className=" absolute z-20 bottom-0 right-0 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-transparent rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="px-3 py-2 transition-all duration-75 ease-in bg-white rounded-md hover:text-white dark:bg-gray-900 group-hover:bg-opacity-0">
                  {cartIds.includes(product.id) ? (
                    <i className="bi bi-trash-fill"></i>
                  ) : (
                    <i className="bi bi-bag-plus"></i>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

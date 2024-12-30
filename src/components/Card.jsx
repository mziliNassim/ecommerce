import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { remouveProduct, setCart, toggleFavorite } from "../features/userSlice";

const Card = ({ product }) => {
  const { mainColor } = useSelector((state) => state.theme);
  const { cart, favorite } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [cartIds, setCartIds] = useState([]);

  useEffect(() => {
    const ids = cart.map((product) => product.id);
    setCartIds(ids);
  }, [cart]);

  return (
    <>
      <div className="flex backdrop:blur-lg transition-all h-[100%] flex-col justify-between p-5 hover:rounded bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-transparent hover:scale-105 relative">
        {!product.avilable && (
          <div
            style={{ background: mainColor }}
            className="text-md font-bold rounded-br-3xl absolute top-0 left-0 w-fit z-40 px-5 py-2"
          >
            Sold Out
          </div>
        )}

        <div className=" relative flex flex-col h-[100%] justify-between">
          <i
            onClick={() => dispatch(toggleFavorite(product.id))}
            className="bi bi-star-fill absolute right-0 top-0 text-gray-400 dark:text-gray-400 cursor-pointer text-2xl"
            style={{
              color: favorite.includes(product.id) && "#FFD700",
              display: product.avilable ? "block" : "none",
            }}
          ></i>
          <Link className="" to={`/product/${product.id}`}>
            <img
              className="rounded mb-3"
              loading="lazy"
              src={`http://localhost:5173/img/products/${product.picture}`}
              alt=""
            />

            <h5 className="mb-3 text-md uppercase font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>

            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
              {product.categorie}
            </p>
          </Link>

          <div className="w-full relative flex flex-col font-semibold">
            <div className="">
              <div>
                <div className="text-xl text-gray-700 dark:text-gray-400">
                  {product.price} Dh
                </div>
                <div className="line-through text-sm text-gray-600 dark:text-gray-500 ">
                  {(product.price + product.price * 0.1).toFixed(2)} Dh
                </div>
              </div>

              <button
                onClick={() =>
                  cartIds.includes(product.id)
                    ? dispatch(remouveProduct(product.id))
                    : dispatch(setCart(product))
                }
                style={{
                  color: cartIds.includes(product.id) ? "red" : mainColor,
                  background: cartIds.includes(product.id) ? "red" : mainColor,
                  display: product.avilable ? "flex" : "none",
                }}
                className=" absolute z-20 bottom-0 right-0 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-transparent rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="px-3 py-2 transition-all hover:text-white ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {cartIds.includes(product.id) ? (
                    <i class="bi bi-trash-fill"></i>
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

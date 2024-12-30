import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import Populaire from "../../components/home/Populaire";

import {
  decrementProduct,
  incrementProduct,
  remouveProduct,
  toggleFavorite,
} from "../../features/userSlice";

const Cart = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [payment, setPayment] = useState({
    originalPrice: 0,
    saving: 0,
    discount: 5,
    totalPrice: 0,
  });

  const { mainColor } = useSelector((state) => state.theme);
  const { cart, favorite } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let price = 0;
    for (let product of cart) {
      let productPrices = product.price * product.count;
      price += productPrices;
    }
    setPayment({
      ...payment,
      saving: price * (payment.discount / 100),
      originalPrice: price,
      totalPrice: price - price * (payment.discount / 100),
    });
  }, [cart]);

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900 my-7 py-7 md:pt-3 md:mt-0">
        <div className=" max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-12 lg:pt-28">
          <h2
            style={{ color: mainColor }}
            className="text-xl font-semibold text-gray-900 dark:text-white sm:text-4xl"
          >
            Shopping Cart
          </h2>

          <div className="my-6 sm:my-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cart.length > 0 ? (
                  cart.map((product, i) => {
                    return (
                      <div
                        key={i}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                      >
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <img
                            className="h-32 w-32 rounded-md"
                            src={`../img/products/${product.picture}`}
                            alt="imac image"
                          />

                          <label htmlFor="counter-input" className="sr-only">
                            Choose quantity:
                          </label>

                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(decrementProduct(product.id))
                                }
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <i class="bi bi-dash text-gray-900 dark:text-white"></i>
                              </button>

                              <span className="mx-4 w-fit min-w-14 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
                                {product.count} / {product.avilable}
                              </span>

                              <button
                                type="button"
                                id="increment-button"
                                onClick={() =>
                                  product.count < product.avilable &&
                                  dispatch(incrementProduct(product.id))
                                }
                                data-input-counter-increment="counter-input"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              >
                                <i class="bi bi-plus text-gray-900 dark:text-white"></i>
                              </button>
                            </div>

                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold text-gray-900 dark:text-white">
                                {product.price} Dh
                              </p>
                            </div>
                          </div>

                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <p className="text-lg font-medium text-gray-900 hover:underline dark:text-white">
                              {product.title}
                            </p>
                            <p className="text-sm font-medium text-gray-600 hover:underline dark:text-white">
                              {product.desc}
                            </p>

                            <div className="flex items-center gap-4">
                              {/* Add to Favorites */}
                              <button
                                onClick={() =>
                                  dispatch(toggleFavorite(product.id))
                                }
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                              >
                                <i
                                  style={{
                                    color: favorite.includes(product.id)
                                      ? "#FFD700"
                                      : "#ddd",
                                  }}
                                  className="bi bi-star-fill me-1.5 text-lg"
                                ></i>
                                {favorite.includes(product.id)
                                  ? "Remouve from Favorite"
                                  : "Add to Favorites"}
                              </button>

                              {/* Remove */}
                              <button
                                onClick={() =>
                                  dispatch(remouveProduct(product.id))
                                }
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              >
                                <i class="bi bi-x text-2xl"></i>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Alert msg="Your cart is currently empty. Start exploring our collection and add your favorite items to the cart." />
                )}
              </div>
            </div>

            {/* Paymeny && total */}
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Payment
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        {payment.originalPrice.toFixed(2)} Dh
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Discount
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        {payment.discount} %
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Saving
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        -{payment.saving.toFixed(2)} Dh
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {payment.totalPrice.toFixed(2)} Dh
                    </dd>
                  </dl>
                </div>

                {/* {payment.totalPrice !== 0 && (
                  )} */}
                <button
                  onClick={() => navigate("/payment")}
                  disabled={payment.totalPrice === 0}
                  className="flex capitalize w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  style={{
                    background: payment.totalPrice ? mainColor : "#ccc",
                  }}
                >
                  payment
                </button>

                <div className="flex items-center justify-center gap-2">
                  <Link
                    to="/products"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6 sm:my-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <Populaire />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

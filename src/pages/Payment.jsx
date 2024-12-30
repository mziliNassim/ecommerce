import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Payment = () => {
  const [payment, setPayment] = useState({
    originalPrice: 0,
    saving: 0,
    discount: 5,
    totalPrice: 0,
  });

  const { mainColor } = useSelector((state) => state.theme);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Payement!!");
  };

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900 my-7 py-7 md:pt-3 md:mt-0">
        <div className=" max-w-screen-xl px-4 pt-10 md:pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-12 lg:pt-28">
          <h2
            style={{ color: mainColor }}
            className=" font-semibold text-gray-900 dark:text-white text-4xl"
          >
            Checkout
          </h2>

          <div className="my-6 sm:my-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <form
              onSubmit={handleSubmit}
              className="mx-auto w-full flex-none space-y-10 lg:max-w-2xl xl:max-w-4xl"
            >
              {/* Personal Details */}
              <div className="grid gap-5">
                <div className="flex gap-4">
                  <h3 className="text-3xl font-bold text-gray-300 dark:text-gray-700">
                    01
                  </h3>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-1">
                    Personal Details
                  </h3>
                </div>

                <div className="">
                  <form>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="First name"
                          class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Last name"
                          class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email address"
                          class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          maxLength={14}
                          placeholder="Phone number"
                          class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Shopping Address */}
              <div className="grid gap-5">
                <div className="flex gap-4">
                  <h3 className="text-3xl font-bold text-gray-300 dark:text-gray-700">
                    02
                  </h3>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-1">
                    Shopping Address
                  </h3>
                </div>

                <div className="md:col-span-2">
                  <form>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Street address"
                          class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="City"
                          class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="State"
                          class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Zip Code"
                          class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Payment method */}
              <div className="grid gap-5">
                <div className="flex gap-4">
                  <h3 className="text-3xl font-bold text-gray-300 dark:text-gray-700">
                    03
                  </h3>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-1">
                    Payment method
                  </h3>
                </div>

                <div className="md:col-span-2">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        className="w-5 h-5 cursor-pointer"
                        id="card"
                        checked="true"
                      />
                      <label
                        for="card"
                        className="ml-4 flex gap-2 cursor-pointer"
                      >
                        <img
                          src="https://readymadeui.com/images/visa.webp"
                          className="w-12"
                          alt="card1"
                        />
                        <img
                          src="https://readymadeui.com/images/american-express.webp"
                          className="w-12"
                          alt="card2"
                        />
                        <img
                          src="https://readymadeui.com/images/master.webp"
                          className="w-12"
                          alt="card3"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-4 gap-4 mt-4">
                    <div className="col-span-2">
                      <input
                        type="number"
                        placeholder="Card number"
                        class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                        maxLength={16}
                      />
                    </div>
                    <div>
                      <input
                        type="month"
                        placeholder="EXP."
                        class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                        value="2030-11"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        maxLength={3}
                        placeholder="CVV"
                        class={`px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full text-sm border-2 rounded-md border-gray-400 dark:border-gray-600 focus:border-[${mainColor}] dark:focus:border-[${mainColor}] outline-none`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* btns */}
              <div className="flex flex-wrap justify-end gap-4 mt-12">
                <Link
                  to="/user/cart"
                  type="button"
                  className="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100"
                >
                  Back
                </Link>
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Pay now
                </button>
              </div>
            </form>

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
                  // onClick={() => navigate("/payment")}
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
        </div>
      </section>
    </>
  );
};

export default Payment;

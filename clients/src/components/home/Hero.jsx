import React from "react";

import hero from "../../img/home/Credit card-pana.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const { mainColor } = useSelector((state) => state.theme);

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900 mt-7 md:mt-0">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-7 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              <span>Shop Effortlessly, Anytime, Anywhere</span>
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Discover the best deals and latest trends at your fingertips.
              Experience seamless shopping with a wide selection for everyone,
              everywhere.
            </p>

            <div className=" space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                to="/products"
                className="heroLink inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center  border-2 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                style={{ borderColor: mainColor, color: mainColor }}
              >
                <svg
                  className="w-6 h-6 mr-2"
                  style={{ color: mainColor }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clipRule="evenodd"
                  />
                </svg>
                Start Shopping Now
              </Link>
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={hero} alt="hero image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

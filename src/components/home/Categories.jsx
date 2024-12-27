import React from "react";

import { useSelector } from "react-redux";

import { categories } from "../../data/categories";
import { Link } from "react-router-dom";

const Categories = () => {
  const { mainColor } = useSelector((state) => state.theme);

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900 md:mt-0">
        <div className="grid max-w-screen-xl px-4 pt-0 pb-8 mx-auto gap-5 lg:gap-8 xl:gap-10 lg:py-16 lg:grid-cols-12 lg:pt-0">
          {categories?.map((categorie, i) => {
            return (
              <div key={i} className="mr-auto place-self-center lg:col-span-3">
                <div className="flex flex-col justify-between p-5 hover:rounded bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-transparent hover:scale-105 transition-all">
                  <div className="">
                    <img
                      className="rounded mb-3"
                      src={categorie.banner}
                      alt=""
                    />

                    <h5 className="mb-3 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
                      {categorie.title}
                    </h5>

                    <p className="mb-3 mt-auto font-normal text-gray-700 dark:text-gray-400">
                      {categorie.desc}
                    </p>
                  </div>

                  <Link
                    to={`/products/${categorie.title}`}
                    className="inline-flex capitalize transition-all w-fit items-center px-3 py-2 text-sm font-medium text-center text-white opacity-90 rounded-lg hover:opacity-100 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 "
                    style={{ background: mainColor }}
                  >
                    Descover all {categorie.title} products
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Categories;

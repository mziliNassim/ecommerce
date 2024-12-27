import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { products } from "../../data/products";
import Card from "../Card";

const Populaire = () => {
  const { mainColor } = useSelector((state) => state.theme);

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900 md:mt-10">
        <div className="grid max-w-screen-xl px-4 pt-0 pb-8 mx-auto gap-5 lg:gap-8 xl:gap-y-10 lg:py-16 lg:grid-cols-5 lg:pt-0">
          <h1 className="text-4xl my-3 col-span-5 font-bold">
            Our Popular Products
          </h1>

          {products?.map((product, i) => {
            if (i > 4) return;
            return <Card key={i} mainColor={mainColor} product={product} />;
          })}

          <div className="col-span-5 flex items-center justify-end w-full">
            <Link
              to="/products"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                see more
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Populaire;

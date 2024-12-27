import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Filter from "../components/products/Filter";
import ProductsCards from "../components/products/ProductsCards.jsx";
import { products } from "../data/products.js";

const Products = () => {
  const { categorie } = useParams();

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900 mt-7 md:mt-0">
        <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28">
          <Filter categorie={categorie} />

          <ProductsCards categorie={categorie} products={products} />
        </div>
      </section>
    </>
  );
};

export default Products;

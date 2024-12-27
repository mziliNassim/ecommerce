import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Filter from "../components/products/Filter.jsx";
import ProductsCards from "../components/products/ProductsCards.jsx";
import { products } from "../data/products.js";
import { useSelector } from "react-redux";

const Favorite = () => {
  const [favoriteListe, setFavoriteListe] = useState([]);
  const { categorie } = useParams();

  const { favorite } = useSelector((state) => state.user);

  useEffect(() => {
    const filterdProducts = products.filter((product) =>
      favorite.includes(product.id)
    );
    setFavoriteListe(filterdProducts);
  }, [favorite]);

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900 mt-7 md:mt-0">
        <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28">
          <Filter categorie={categorie} />

          <ProductsCards categorie={categorie} products={favoriteListe} />
        </div>
      </section>
    </>
  );
};

export default Favorite;

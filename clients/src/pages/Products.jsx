import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Filter from "../components/products/Filter";
import ProductsCards from "../components/products/ProductsCards.jsx";
import Loding from "../components/Loding.jsx";
import axios from "axios";

const Products = () => {
  const { categorie } = useParams();

  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("http://localhost:5000/products")
        .then((res) => {
          if (categorie) {
            let filterdProduct = res.data.filter(
              (product) => product.categorie === categorie
            );
            setProducts(filterdProduct);
            return;
          }
          setProducts(res.data);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    };

    setLoading(true);
    fetchProducts();
  }, [categorie]);

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900 mt-7 md:mt-0">
        <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28">
          <Filter categorie={categorie} />

          {loading && <Loding />}

          {error ? (
            <div
              class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center"
              role="alert"
            >
              {error}
            </div>
          ) : (
            <ProductsCards products={products} />
          )}
        </div>
      </section>
    </>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../Card";
import Loding from "../Loding";

const Populaire = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    await axios
      .get("http://localhost:5000/products")
      .then((res) => {
        let populaire = res.data.filter((product) => product.id < 6);
        setProducts(populaire);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  return (
    <>
      <section className="overflow-y-hidden bg-white dark:bg-gray-900 md:mt-10">
        <div className="grid max-w-screen-xl grid-cols-1 gap-5 px-4 pt-0 pb-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-8 xl:gap-y-10 lg:py-16 lg:pt-0">
          <h1 className="my-3 text-4xl font-bold sm:col-span-2 md:col-span-3 lg:col-span-5">
            Our Popular Products
          </h1>

          {loading ? (
            <Loding />
          ) : (
            <>
              {products?.map((product, i) => {
                return <Card key={i} product={product} />;
              })}

              <div className="flex items-center justify-end w-full sm:col-span-2 md:col-span-3 lg:col-span-5">
                <Link
                  to="/products"
                  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    see more
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Populaire;

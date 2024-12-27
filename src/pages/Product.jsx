import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { setCart, toggleFavorite } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const { favorite } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const filterdProduct = products.find((product) => product.id == id);
    if (filterdProduct) setProduct(filterdProduct);
  }, [id]);

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900 mt-7 md:mt-0">
        <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28">
          {product ? (
            <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 p-5 rounded-md shadow-lg">
              <div className="px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover rounded-md shadow-md"
                    src={product.picture}
                    alt="Product Image"
                  />
                </div>
              </div>

              <div className="px-4 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl mb-5 font-bold text-gray-800 dark:text-white">
                    {product.title}
                  </h2>
                  <h3 className="text-lg mb-5 font-medium border w-fit px-2 py-0 rounded-xl text-gray-600 dark:text-white">
                    {product.categorie}
                  </h3>
                  <div className="mb-5">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Price:{" "}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {product.price} Dh
                    </span>
                  </div>
                  <div className="mb-5">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Availability:{" "}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {product.avilable ? "In Stock" : "Sold Out"}
                    </span>
                  </div>
                  <div className="mb-5">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {product.desc}
                    </p>
                  </div>
                </div>

                <div className="flex mb-5">
                  <div className="w-1/2 px-2">
                    <button
                      onClick={() => dispatch(setCart(product))}
                      className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-1/2 px-2">
                    <button
                      onClick={() => dispatch(toggleFavorite(id))}
                      className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      {favorite.includes(id)
                        ? "Add to favorite"
                        : "Remouve from favorite"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "no product"
          )}
        </div>
      </section>
    </>
  );
};

export default Product;

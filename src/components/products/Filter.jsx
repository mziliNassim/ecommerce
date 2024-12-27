import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../../data/categories.js";
import { useSelector } from "react-redux";

const Filter = ({ categorie }) => {
  const { mainColor } = useSelector((state) => state.theme);
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    if (location.pathname.startsWith("/product")) {
      setCurrentLocation("/products");
      return;
    }
    setCurrentLocation("/favorite");
  }, [location]);

  return (
    <>
      <div className="font-sans py-4 mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          <Link
            to={currentLocation}
            className="tab font-bold text-base capitalize text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 flex items-center justify-center py-3 px-6 border-b-4  cursor-pointer transition-all"
            style={{
              color: !categorie && mainColor,
              borderBottomColor: !categorie && mainColor,
            }}
          >
            All
          </Link>

          {categories &&
            categories.map((cat, i) => {
              return (
                <Link
                  key={i}
                  to={`${currentLocation}/${cat.title}`}
                  id="profileTab"
                  className="tab font-bold text-base capitalize text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 flex items-center justify-center py-3 px-6 border-b-4  cursor-pointer transition-all"
                  style={{
                    color: categorie === cat.title && mainColor,
                    borderBottomColor: categorie === cat.title && mainColor,
                  }}
                >
                  {cat.title}
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Filter;

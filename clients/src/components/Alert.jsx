import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Alert = ({ msg }) => {
  const { mainColor } = useSelector((state) => state.theme);

  return (
    <>
      <div
        id="alert-border-1"
        className="flex items-center w-full col-span-3 p-4 mb-4 border-t-4 bg-gray-100 dark:bg-gray-800"
        style={{ borderColor: mainColor, color: mainColor }}
        role="alert"
      >
        <i className="bi bi-info-circle-fill"></i>

        <div className="ms-3 text-sm font-medium">
          {msg + " "}
          <Link
            to="/products"
            className="font-semibold underline hover:no-underline"
          >
            Shop now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Alert;

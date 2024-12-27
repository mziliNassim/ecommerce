import React from "react";
import { useSelector } from "react-redux";

const Loding = () => {
  const { mainColor } = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex justify-center overflow-x-hidden items-center absolute bg-white dark:bg-gray-900 top-0 left-0 z-40 w-full h-full">
        <div
          className="border-gray-300 dark:border-gray-700 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600 dark:border-t-blue-400"
          style={{ borderTopColor: mainColor }}
        />
      </div>
    </>
  );
};

export default Loding;

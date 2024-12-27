import React, { useEffect, useRef } from "react";

import { useSelector } from "react-redux";

const NotFound = () => {
  const { mainColor } = useSelector((state) => state.theme);

  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900 mt-7 md:mt-0">
        <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28">
          <h1 className="text-2xl">NotFound</h1>
        </div>
      </section>
    </>
  );
};

export default NotFound;

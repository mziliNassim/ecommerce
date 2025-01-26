import React from "react";

import Hero from "../components/home/Hero";
import Categories from "../components/home/categories";
import Populaire from "../components/home/Populaire";

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Categories />
        <Populaire />
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Card from "../Card";

const ProductsCards = ({ categorie, products }) => {
  const [filterdProducts, setFilterdProducts] = useState(products);

  useEffect(() => {
    if (!categorie) setFilterdProducts(products);
    else {
      setFilterdProducts(
        products.filter((product) => product.categorie === categorie)
      );
    }
  }, [categorie, products]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {filterdProducts &&
          filterdProducts.map((product, i) => {
            return <Card key={i} product={product} />;
          })}
      </div>
    </>
  );
};

export default ProductsCards;

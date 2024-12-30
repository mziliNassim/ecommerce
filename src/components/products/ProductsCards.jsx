import React from "react";
import Card from "../Card";
import Error from "../Alert";

const ProductsCards = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {products?.length ? (
          products.map((product, i) => <Card key={i} product={product} />)
        ) : (
          <Error msg="No products" />
        )}
      </div>
    </>
  );
};

export default ProductsCards;

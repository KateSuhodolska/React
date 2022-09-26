import React from "react";
import ProductsList from "./ProductsList";

const cartTitle = ({ userData, products }) => {
  return (
    <>
      <div className="cart-title">{`${userData.firstName}, you added ${products.length} items`}</div>
      <ProductsList products={products} />
    </>
  );
};

export default cartTitle;

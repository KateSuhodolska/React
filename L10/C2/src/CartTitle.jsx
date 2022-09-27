import React from "react";

const cartTitle = ({ userData, products }) => {
  return (
    <>
      <div className="cart-title">{`${userData.firstName}, you added ${products.length} items`}</div>
    </>
  );
};

export default cartTitle;

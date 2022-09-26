import React, { Component } from "react";
import CartTitle from "./CartTitle";

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: "1",
        name: "iPhone 11",
        price: 999,
      },
      {
        id: "2",
        name: "iPad Pro",
        price: 799,
      },
    ],
  };
  render() {
    return (
      <div className="column">
        <CartTitle
          userData={this.props.userData}
          products={this.state.cartItems}
        />
      </div>
    );
  }
}

export default ShoppingCart;

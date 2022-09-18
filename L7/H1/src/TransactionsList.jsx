import React, { Component } from "react";
import Transaction from "./Transaction";

class TransactionsLists extends Component {
  render() {
    return (
      <ul className="transactions">
        {this.props.transactions.map((el) => (
          <Transaction key={el.id} {...el} />
        ))}
      </ul>
    );
  }
}

export default TransactionsLists;

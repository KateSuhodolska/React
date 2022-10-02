import React from "react";
import Home from "./Home";
import Products from "./Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="page">
      <Router>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products" component={Products} />
      </Router>
    </div>
  );
};

export default Page;

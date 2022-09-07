import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import "./index.scss";

const rootEl = document.querySelector("#root");

ReactDOM.render(
  <Profile
    firstName="James"
    lastName="Bond"
    birthDate="1991-01-17T11:11:11.819Z"
    birthPlace="London"
  />,
  rootEl
);

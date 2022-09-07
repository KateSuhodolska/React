import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import "./index.scss";
import moment from "moment";

const rootEl = document.querySelector("#root");

const birthDate = new Date("2005-05-11").getFullYear();
const age = moment().subtract(birthDate, "years");

ReactDOM.render(
  <Greeting firstName="John" lastName="Doe" birthDate={new Date(age)} />,
  rootEl
);

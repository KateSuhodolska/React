import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import moment from "moment";
import "./index.scss";

const rootEl = document.querySelector("#root");

export const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return moment(
    new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset))
  ).format("LTS");
};

ReactDOM.render(<App />, rootEl);

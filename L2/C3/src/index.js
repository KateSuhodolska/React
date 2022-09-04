import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElement = document.querySelector("#root");

const timer = (time) => {
  const nowSec = new Date(time).getSeconds();
  const backgroundColor = nowSec % 2 === 0 ? "#fff" : "#000";
  const textColor = nowSec % 2 !== 0 ? "#fff" : "#000";

  const styles = {
    color: textColor,
    backgroundColor: backgroundColor,
  };

  const elem = (
    <div className="seconds" style={styles}>
      Now is {nowSec}
    </div>
  );

  ReactDOM.render(elem, rootElement);
};

setInterval(() => timer(new Date()), 1000);

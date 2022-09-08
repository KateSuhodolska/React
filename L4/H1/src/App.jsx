import React from "react";
import Clock from "./Clock.jsx";

const App = () => {
  return (
    <>
      <Clock location="New York" offset={-3} />
      <Clock location="Kyiv" offset={7} />
      <Clock location="London" offset={10} />
    </>
  );
};

export default App;

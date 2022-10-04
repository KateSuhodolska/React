import React from "react";
import Clock from "./Clock";

const App = () => {
  return (
    <>
      <Clock location="New York" offset={2} />
      <Clock location="London" offset={1} />
      <Clock location="Kyiv" offset={4} />
    </>
  );
};

export default App;

import React from "react";
import Clock from "./Clock.jsx";

const App = () => {
  return (
    <>
      <Clock location="Kyiv" offset={-3} />
      <Clock location="Japan" offset={7} />
      <Clock location="London" offset={10} />
    </>
  );
};

export default App;

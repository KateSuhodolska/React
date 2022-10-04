import React, { useState, useEffect } from "react";

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    heigth: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({
      width: innerWidth,
      heigth: innerHeight,
    });

    const handleResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({
        width: innerWidth,
        heigth: innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { width, heigth } = dimensions;
  return <div className="dimensions">{`${width}px - ${heigth}px`}</div>;
};

export default Dimensions;

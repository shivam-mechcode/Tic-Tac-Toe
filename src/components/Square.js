// import React, { useState } from "react";
import "./Square.css";

const Square = ({ value, onClick }) => {
  // console.log(props);
  return (
    <>
      <div className="square-style" onClick={onClick}>
        {value}
      </div>
    </>
  );
};

export default Square;

import React from "react";
import { Link } from "react-router-dom";

export const Producto = ({producto}) => {
  return (
    <div className="producto">
      <Link to={"/"}>
        <img src={producto.image} />
      </Link>
      <div className="info">
        <p>{producto.title}</p>
        <mark>${producto.price}</mark>
      </div>
    </div>
  );
};

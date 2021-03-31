import React from "react";
import { PropTypes } from "prop-types";
import "./_product.scss";
export const Product = ({ name, img }) => {
  return (
    <li className="products__item">
      <span className="products__name">{name}</span>{" "}
      <img className="products__img" src={img} />
    </li>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

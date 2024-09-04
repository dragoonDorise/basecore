import React from "react";
import { PropTypes } from "prop-types";
import "./core_icon.scss";
export const Icon = ({ icon, css }) => {
  return (
    <svg className={`icon ${css}`} role="presentation">
      <use xlinkHref={`${process.env.PUBLIC_URL}/svg/sprite.svg#${icon}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  css: PropTypes.string,
};

import React from "react";
import { PropTypes } from "prop-types";
import "./core_icon.scss";

const publicUrl =
typeof process !== "undefined" && process.env && process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : import.meta.env.VITE_PUBLIC_URL || "";

export const Icon = ({ icon, css }) => {
  return (
    <svg className={`icon ${css}`} role="presentation">
      <use xlinkHref={`${publicUrl}/svg/sprite.svg#${icon}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  css: PropTypes.string,
};

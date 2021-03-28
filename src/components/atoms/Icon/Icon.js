import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./icon.scss";
export const Icon = ({ icon, size }) => {
  return (
    <svg className={`icon ${size}`} role="presentation">
      <use xlinkHref={`./svg/sprite.svg#${icon}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

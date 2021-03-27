import React, { useState } from "react";
import { PropTypes } from "prop-types";
export const Icon = ({ icon }) => {
  return (
    <svg className="icon" role="presentation">
      <use xlinkHref={`./svg/sprite.svg#${icon}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

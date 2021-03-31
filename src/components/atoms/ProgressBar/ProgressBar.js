import React from "react";
import { PropTypes } from "prop-types";
import "./progress-bar.scss";
export const ProgressBar = ({ css, value, max }) => {
  const percentage = (value * 100) / max;
  return (
    <progress className={`progress ${css}`} value={value} max={max}>
      <div className="progress">
        <span style={{ width: percentage + "%" }}>{value}%</span>
      </div>
    </progress>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
};

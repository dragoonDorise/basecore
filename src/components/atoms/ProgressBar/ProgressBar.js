import React from "react";
import { PropTypes } from "prop-types";
import "./core_progress-bar.scss";
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
  css: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.string.isRequired,
};

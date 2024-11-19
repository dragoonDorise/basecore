import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./core_progress-bar.scss";

export const ProgressBar = ({ css, value, max, infinite }) => {
  const [counter, setCounter] = useState(0);
  const [valueFinal, setValueFinal] = useState(value);

  useEffect(() => {
    let interval;
    if (infinite) {
      interval = setInterval(() => {
        setCounter((prevCounter) => (prevCounter === 110 ? -10 : prevCounter + 1));
      }, 100);
    }

    return () => clearInterval(interval);
  }, [infinite]);

  useEffect(() => {
    if (infinite) {
      setValueFinal(counter);
    } else {
      setValueFinal(value);
    }
  }, [counter, infinite, value]);

  const percentage = (value * 100) / max;

  return (
    <progress className={`progress ${css}`} value={valueFinal} max={max}>
      <div className="progress">
        <span style={{ width: percentage + "%" }}>{value}%</span>
      </div>
    </progress>
  );
};

ProgressBar.propTypes = {
  css: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  infinite: PropTypes.bool,
};

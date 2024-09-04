import React from "react";
import { PropTypes } from "prop-types";
import "./core_form-input-range-simple.scss";
export const FormInputRangeSimple = ({
  label,
  id,
  name,
  disabled,
  onChange,
  value,
  max,
  min,
  step,
  validation,
}) => {
  return (
    <div className={`form__group ${validation}`}>
      <label htmlFor={name} className="label-range">
        {label}
      </label>
      <div className="input-range-metadata">
        <input
          className="form__control"
          type="range"
          min={min}
          max={max}
          value={value}
          step={value}
          name={name}
          id={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

FormInputRangeSimple.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  validation: PropTypes.string,
};

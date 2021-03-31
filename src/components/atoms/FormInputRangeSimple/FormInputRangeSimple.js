import React from "react";
import { PropTypes } from "prop-types";
import "./core_form-input-range-simple.scss";
export const FormInputRangeSimple = ({
  label,
  placeholder,
  type,
  name,
  addon,
  addonText,
  disabled,
  disabledAddon,
  onClick,
  onChange,
  focus,
  value,
  max,
  min,
  maxLength,
  minLength,
  validation,
  error,
}) => {
  return (
    <div className="form__group">
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
          step="1"
          name={name}
          id={name}
        />
      </div>
    </div>
  );
};

FormInputRangeSimple.propTypes = {
  label: PropTypes.string.isRequired,
};

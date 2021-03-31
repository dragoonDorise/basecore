import React from "react";
import { PropTypes } from "prop-types";
import "./core_form-radio-simple.scss";
export const FormRadioSimple = ({
  name,
  id,
  children,
  value,
  label,
  checked,
}) => {
  return (
    <div className="form__group">
      <div className="radio-simple">
        <input
          id={id}
          name={name}
          type="radio"
          value={value}
          checked={checked}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

FormRadioSimple.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

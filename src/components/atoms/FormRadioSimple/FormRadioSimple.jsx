import React from "react";
import { PropTypes } from "prop-types";
import "./core_form-radio-simple.scss";
export const FormRadioSimple = ({
  name,
  id,
  value,
  label,
  checked,
  validation,
}) => {
  return (
    <div className={`form__group ${validation}`}>
      <div className="radio-simple">
        <input
          id={id}
          name={name}
          type="radio"
          value={value}
          defaultChecked={checked}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

FormRadioSimple.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  checked: PropTypes.string,
  validation: PropTypes.string,
};

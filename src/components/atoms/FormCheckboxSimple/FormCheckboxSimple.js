import React from "react";
import { PropTypes } from "prop-types";
import "./core_form-checkbox-simple.scss";
export const FormCheckboxSimple = ({
  name,
  id,
  children,
  value,
  label,
  checked,
  validation,
}) => {
  return (
    <div className={`form__group ${validation}`}>
      <div className="checkbox-simple">
        <input
          id={id}
          name={name}
          type="checkbox"
          value={value}
          checked={checked}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

FormCheckboxSimple.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  checked: PropTypes.string,
  validation: PropTypes.string,
};

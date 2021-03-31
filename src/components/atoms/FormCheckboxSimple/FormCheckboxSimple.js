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
}) => {
  return (
    <div className="form__group">
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
  label: PropTypes.string.isRequired,
};

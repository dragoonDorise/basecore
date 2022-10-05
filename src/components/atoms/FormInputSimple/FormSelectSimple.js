import React from "react";
import { PropTypes } from "prop-types";
export const FormSelectSimple = ({
  label,
  name,
  children,
  onChange,
  hideDefault,
  validation,
}) => {
  return (
    <>
      <div className={`form__group ${validation}`}>
        <label htmlFor={name} className="show-sr">
          {label}
        </label>
        <select
          className="form__select"
          name={name}
          id={name}
          onChange={onChange}>
          {!hideDefault && <option value="-1">{label}</option>}
          {children}
        </select>
      </div>
    </>
  );
};

FormSelectSimple.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  hideDefault: PropTypes.bool,
  validation: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
  ]),
};

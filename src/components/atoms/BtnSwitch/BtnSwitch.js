import React from "react";
import { PropTypes } from "prop-types";
import "./core_btn-switch.scss";
export const BtnSwitch = ({ name, onChange, value }) => {
  return (
    <div className="btn-switch">
      <input
        type="checkbox"
        name={name}
        className="btn-switch__checkbox"
        id={name}
        onChange={onChange}
        value={value}
      />
      <label className="btn-switch__label" htmlFor={name}></label>
    </div>
  );
};

BtnSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

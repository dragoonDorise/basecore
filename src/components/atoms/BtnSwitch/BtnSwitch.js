import React from "react";
import { PropTypes } from "prop-types";
import "./core_btn-switch.scss";
export const BtnSwitch = ({ name }) => {
  return (
    <div className="btn-switch">
      <input
        type="checkbox"
        name={name}
        className="btn-switch__checkbox"
        id={name}
      />
      <label className="btn-switch__label" htmlFor={name}></label>
    </div>
  );
};

BtnSwitch.propTypes = {
  name: PropTypes.string.isRequired,
};

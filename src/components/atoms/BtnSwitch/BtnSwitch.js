import React from "react";
import { PropTypes } from "prop-types";
import "./btn-switch.scss";
export const BtnSwitch = ({ name }) => {
  return (
    <div className="btn-switch">
      <input
        type="checkbox"
        name={name}
        className="btn-switch__checkbox"
        id={name}
      />
      <label className="btn-switch__label" for={name}></label>
    </div>
  );
};

BtnSwitch.propTypes = {
  name: PropTypes.string.isRequired,
};

import React from "react";
import { PropTypes } from "prop-types";
import "./core_alert.scss";
import { Icon } from "getbasecore/Atoms";
export const Alert = ({ children, css, close = false }) => {
  const hideMe = (e) => {
    alert("e");
  };

  return (
    <div className={`alert ${css}`} role="alert">
      {close && (
        <button
          type="button"
          className="alert__close"
          data-id-dismiss="this"
          aria-hidden="true"
        >
          <Icon icon="close" onClick={hideMe} />
        </button>
      )}

      {children}
    </div>
  );
};

Alert.propTypes = {
  css: PropTypes.string,
  close: PropTypes.bool,
};

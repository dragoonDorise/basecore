import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./core_alert.scss";
import { Icon } from "getbasecore/Atoms";
export const Alert = ({ children, css, close = false }) => {
  const [state, setState] = useState({ active: false });
  const { active } = state;
  const hideMe = (isActive) => {
    if (active === true) {
      setState({ active: false });
    } else {
      setState({ active: true });
    }
  };

  return (
    <div
      className={active === true ? `alert is-hidden ${css}` : `alert ${css}`}
      role="alert"
    >
      {close && (
        <button
          type="button"
          className="alert__close"
          data-id-dismiss="this"
          aria-hidden="true"
          onClick={hideMe}
        >
          <Icon icon="close" />
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

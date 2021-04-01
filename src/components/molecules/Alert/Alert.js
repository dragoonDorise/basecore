import React from "react";
import "./core_alert.scss";
import { Icon } from "getbasecore/Atoms";
export const Alert = ({ children, css, close = false }) => {
  return (
    <div className={`alert ${css}`} role="alert">
      {close && (
        <button
          type="button"
          className="alert__close"
          data-id-dismiss="this"
          aria-hidden="true"
        >
          <Icon icon="close" />
        </button>
      )}

      {children}
    </div>
  );
};

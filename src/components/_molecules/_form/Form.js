import React from "react";
import { PropTypes } from "prop-types";
export const Form = ({ children, css, onSubmit }) => {
  return (
    <form className={`form ${css}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  css: PropTypes.string.isRequired,
};

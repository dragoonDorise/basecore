import React from "react";
import { PropTypes } from "prop-types";
import "./core_form.scss";
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

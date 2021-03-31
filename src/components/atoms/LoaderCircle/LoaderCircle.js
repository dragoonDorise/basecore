import React from "react";
import { PropTypes } from "prop-types";
import "./core_loader-circle.scss";
export const LoaderCircle = ({ aria }) => {
  return <div class="loader-circle" aria-label={aria}></div>;
};
LoaderCircle.propTypes = {
  aria: PropTypes.string.isRequired,
};

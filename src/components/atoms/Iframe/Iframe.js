import React from "react";
import { PropTypes } from "prop-types";
import "./iframe.scss";
export const Iframe = ({ src, css }) => {
  return (
    <div className="embed-responsive embed-responsive--16-9">
      <iframe
        className="embed-responsive__item"
        width="1280"
        height="720"
        src={src}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  css: PropTypes.string,
};

import React from "react";
import { PropTypes } from "prop-types";
import "./iframe.scss";
export const Iframe = ({ src, css, title }) => {
  return (
    <div className="embed-responsive embed-responsive--16-9">
      <iframe
        title={title}
        className="embed-responsive__item"
        width="1280"
        height="720"
        src={src}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

Iframe.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  css: PropTypes.string,
};

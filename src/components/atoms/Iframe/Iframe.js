import React from "react";
import { PropTypes } from "prop-types";
import "./iframe.scss";
export const Iframe = ({ src, css }) => {
  return (
    <div class="embed-responsive embed-responsive--16-9">
      <iframe
        class="embed-responsive__item"
        width="1280"
        height="720"
        src={src}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  css: PropTypes.string,
};

import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./img.scss";
export const Img = ({ src, src2x, alt, css }) => {
  return (
    <img
      className={css}
      src={src}
      srcset={`1x ${src}, 2x ${src2x}`}
      alt={alt}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  src2x: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

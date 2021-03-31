import React from "react";
import { PropTypes } from "prop-types";
import "./img.scss";
export const Img = ({ src, srcXS, srcSM, srcMD, srcLG, srcXL, alt, css }) => {
  return (
    <picture className={css}>
      <source media="(max-width: 380px)" srcSet={srcXS} />

      <source media="(max-width: 768px)" srcSet={srcSM} />

      <source media="(max-width: 992px)" srcSet={srcMD} />

      <source media="(max-width: 1200px)" srcSet={srcLG} />

      <source media="(max-width: 1440px)" srcSet={srcXL} />

      <img className={css} src={src} alt={alt} />
    </picture>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

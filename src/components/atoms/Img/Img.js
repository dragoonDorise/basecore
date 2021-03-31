import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./img.scss";
export const Img = ({ src, srcXS, srcSM, srcMD, srcLG, srcXL, alt, css }) => {
  return (
    <picture className={css}>
      <source media="(max-width: 380px)" srcset={srcXS} />

      <source media="(max-width: 768px)" srcset={srcSM} />

      <source media="(max-width: 992px)" srcset={srcMD} />

      <source media="(max-width: 1200px)" srcset={srcLG} />

      <source media="(max-width: 1440px)" srcset={srcXL} />

      <img className={css} src={src} alt={alt} />
    </picture>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

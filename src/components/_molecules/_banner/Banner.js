import React from "react";
import { PropTypes } from "prop-types";
import "./_banner.scss";
export const Banner = ({ title, subtitle, img, alt }) => {
  return (
    <div className="banner">
      <img className="banner__img" src={img} alt={alt} />
      <div className="banner__text">
        <span className="h2">{title}</span>
        <span className="h4">{subtitle}</span>
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

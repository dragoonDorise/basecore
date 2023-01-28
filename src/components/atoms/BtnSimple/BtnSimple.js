import React from "react";
import { PropTypes } from "prop-types";
import "./core_btn-simple.scss";
export const BtnSimple = ({ onClick, onChange, aria, type, css, children, href, disabled, name, id, target }) => {
  return (
    <>
      {type === "button" && (
        <button type={type} aria-label={aria} onClick={onClick} className={`btn-simple ${css}`} disabled={disabled ? "disabled" : ""}>
          {children}
        </button>
      )}

      {type === "link" && (
        <a href={href} aria-label={aria} onClick={onClick} className={`btn-simple ${css}`} target={!!target ? target : "_parent"}>
          {children}
        </a>
      )}

      {type === "toggle" && (
        <>
          <input id={id} name={name} type="radio" aria-label={aria} autoComplete="off" onChange={onChange} />
          <label tabIndex="0" htmlFor={id} className={`btn-simple ${css}`}>
            {children}
          </label>
        </>
      )}
      {type === "multiple" && (
        <>
          <input id={id} name={name} type="checkbox" aria-label={aria} autoComplete="off" />
          <label tabIndex="0" htmlFor={id} className={`btn-simple ${css}`}>
            {children}
          </label>
        </>
      )}
    </>
  );
};

BtnSimple.propTypes = {
  onClick: PropTypes.func,
  aria: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  css: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.element, PropTypes.string]),
};

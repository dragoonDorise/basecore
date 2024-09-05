import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Icon } from "getbasecore/Atoms";
import "./core_dropdown.scss";
export const Dropdown = ({
  css,
  text,
  children,
  ariaControls,
  ariaLabelled,
}) => {
  const [state, setState] = useState({ active: false });
  const { active } = state;
  const toggleDropdown = (isActive) => {
    if (active === true) {
      setState({ active: false });
    } else {
      setState({ active: true });
    }
  };

  return (
    <>
      <div className={active === true ? "dropdown dropdown--open" : "dropdown"}>
        <button
          className={css}
          type="button"
          id={ariaLabelled}
          aria-expanded={active ? "true" : "false"}
          aria-haspopup="true"
          aria-controls={ariaControls}
          onClick={toggleDropdown}
        >
          {text}
          <Icon icon="caret-arrow" css="icon" />
        </button>
        <ul
          className="dropdown__menu"
          aria-expanded={active ? "true" : "false"}
          aria-labelledby={ariaLabelled}
          tabIndex="-1"
          id={ariaControls}
          role="menu"
        >
          {children}
        </ul>
      </div>
    </>
  );
};

Dropdown.propTypes = {
  css: PropTypes.string,
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  ariaControls: PropTypes.string.isRequired,
  ariaLabelled: PropTypes.string.isRequired,
};

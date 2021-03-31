import React from "react";
import { PropTypes } from "prop-types";
import "./core_form-input-simple.scss";
export const FormInputSimple = ({
  label,
  placeholder,
  type,
  name,
  addon,
  addonText,
  disabled,
  disabledAddon,
  onClick,
  onChange,
  focus,
  value,
  max,
  min,
  maxLength,
  minLength,
  validation,
  error,
}) => {
  var addOnCss = addon === "left" ? "form__group--addon--left" : "";
  addOnCss = addon === "right" ? "form__group--addon--right" : "";
  let errorArray;
  if (error) {
    errorArray = Object.values(error);
  } else {
    errorArray = [];
  }

  return (
    <>
      <div className={`form__group ${addOnCss} ${validation}`}>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          className="form__control"
          placeholder={placeholder}
          type={type}
          name={name}
          disabled={disabled ? "disabled" : ""}
          autoFocus={focus ? "autofocus" : ""}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
          minLength={minLength}
          max={max}
          min={min}
        />
        {addon && (
          <button
            className="form__addon btn-simple--1"
            type="submit"
            disabled={disabledAddon ? "disabled" : ""}
            onClick={onClick}
          >
            {addonText.includes("#") ? (
              <svg className="icon icon--xs">
                <use xlinkHref={`./svg/sprite.svg${addonText}`}></use>
              </svg>
            ) : (
              addonText
            )}
          </button>
        )}
        <ul className="form__error">
          {errorArray.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

FormInputSimple.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

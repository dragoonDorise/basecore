import { PropTypes } from "prop-types";
import "./core_btn-simple.scss";
export const BtnSimple = ({
  onClick,
  aria,
  type,
  css,
  children,
  href,
  disabled,
}) => {
  return (
    <>
      {type !== "link" && (
        <button
          type={type}
          aria-label={aria}
          onClick={onClick}
          className={`btn-simple ${css}`}
          disabled={disabled ? "disabled" : ""}
        >
          {children}
        </button>
      )}

      {type === "link" && (
        <a
          href={href}
          aria-label={aria}
          onClick={onClick}
          className={`btn-simple ${css}`}
          target="_parent"
        >
          {children}
        </a>
      )}
    </>
  );
};

BtnSimple.propTypes = {
  aria: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
};

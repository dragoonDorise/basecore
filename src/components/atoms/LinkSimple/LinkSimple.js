import { PropTypes } from "prop-types";
import "./link-simple.scss";
export const LinkSimple = ({ onClick, css, children, href, target }) => {
  return (
    <>
      {href && (
        <a
          href={href}
          onClick={onClick}
          className={`link-simple ${css}`}
          target={target}
        >
          {children}
        </a>
      )}

      {!href && (
        <button
          type="button"
          onClick={onClick}
          className={`link-simple ${css}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

LinkSimple.propTypes = {
  onClick: PropTypes.func,
  css: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
};

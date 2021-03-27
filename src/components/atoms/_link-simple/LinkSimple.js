//import { PropTypes } from "prop-types";
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

// LinkSimple.propTypes = {
//   href: PropTypes.string.isRequired,
// };

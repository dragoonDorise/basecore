// import { PropTypes } from "prop-types";
export const BtnGroup = ({ children }) => {
  return (
    <>
      <div className="btn-group" role="group">
        {children}
      </div>
    </>
  );
};

// BtnSimple.propTypes = {
//   aria: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
// };

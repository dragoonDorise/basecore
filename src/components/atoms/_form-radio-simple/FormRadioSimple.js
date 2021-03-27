import React from "react";
//import {PropTypes} from "prop-types"
export const FormRadioSimple = ({ name, id, children, value, label }) => {
  const [state, setState] = useState("");

  return (
    <div class="form__group">
      <div class="radio-simple">
        <input id={id} name={name} type="radio" value={value} />
        <label for={id}>{label}</label>
      </div>
    </div>
  );
};

// FormRadioSimple.propTypes = {
//   name: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
// };

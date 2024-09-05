import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Icon } from "getbasecore/Atoms";
export const AccordionItem = ({ title, desc, id }) => {
  //Estado para determinar si está plegado o no
  const [state, setState] = useState(false);

  const handleClick = () => {
    state ? setState(false) : setState(true);
  };

  let css = state ? "is-visible" : "";

  return (
    <>
      <button
        type="button"
        data-toggle="collapse"
        aria-controls={`collapse${id}`}
        className={css}
        aria-expanded={state ? true : false}
        onClick={handleClick}
      >
        <Icon icon="caret-arrow" css="icon--xs" />
        {title}
      </button>

      <div
        id={`collapse${id}`}
        className={`accordion__collapse ${css}`}
        aria-expanded={state ? true : false}
      >
        <div
          className="accordion__panel"
          dangerouslySetInnerHTML={{ __html: desc }}
        ></div>
      </div>
    </>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
};

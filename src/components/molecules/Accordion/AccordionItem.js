import React, { useState } from "react";
import { PropTypes } from "prop-types";
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
        <svg className="icon" role="presentation">
          <use xlinkHref="./svg/sprite.svg#caret-arrow"></use>
        </svg>
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

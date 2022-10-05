import React from "react";
export const TabList = ({ children, active, onClick, id, onClickAlt }) => {
  //const childrenArray = Object.values(children);

  return (
    <>
      <li role="presentation" className={active ? "is-active" : ""}>
        <button
          type="button"
          aria-selected={active ? "true" : "false"}
          aria-controls={`tab${id}-content`}
          id={`tab${id}`}
          role="tab"
          onClick={() => {
            onClick;
            onClickAlt;
          }}>
          {children}
        </button>
      </li>
    </>
  );
};

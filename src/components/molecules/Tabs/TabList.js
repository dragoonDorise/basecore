import React from "react";
export const TabList = ({ children, active, onClick }) => {
  //const childrenArray = Object.values(children);

  return (
    <>
      <li role="presentation" className={active ? "is-active" : ""}>
        <button
          type="button"
          aria-selected="true"
          aria-controls="home"
          role="tab"
          data-toggle="tab"
          onClick={onClick}
        >
          {children}
        </button>
      </li>
    </>
  );
};

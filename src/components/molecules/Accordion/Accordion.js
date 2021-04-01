import React from "react";
import { PropTypes } from "prop-types";
import { AccordionItem } from "./AccordionItem.js";
import "./core_accordion.scss";

export const Accordion = ({ title, children }) => {
  const childrenArray = Object.values(children);

  return (
    <div className="accordion">
      {childrenArray.map(({ title, desc }, i) => {
        return <AccordionItem key={i} id={i} title={title} desc={desc} />;
      })}
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
};

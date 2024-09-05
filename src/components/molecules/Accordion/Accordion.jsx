import React from "react";
import { PropTypes } from "prop-types";
import { AccordionItem } from "./AccordionItem.js";
import "./core_accordion.scss";

export const Accordion = ({ title, items }) => {
  const itemsArray = Object.values(items);

  return (
    <div className="accordion">
      {itemsArray.map(({ title, desc }, i) => {
        return <AccordionItem key={i} id={i} title={title} desc={desc} />;
      })}
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.object,
};

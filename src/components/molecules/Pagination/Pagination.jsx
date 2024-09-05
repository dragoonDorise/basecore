import React from "react";
import { PropTypes } from "prop-types";
import { Icon } from "getbasecore/Atoms";
import "./core_pagination.scss";
export const Pagination = ({ onClick, onClickNext, onClickPrev, pages }) => {
  return (
    <nav role="navigation" className="pagination" aria-label="Page navigation">
      <ul>
        <li>
          <a href="./" aria-label="Previous" onClick={onClickPrev}>
            <Icon icon="arrow-left" />
          </a>
        </li>

        <li className="is-active">
          <a href="./" aria-label="Page 1" onClick={(e) => onClick}>
            1
          </a>
        </li>

        <li>
          <a href="./" aria-label="Page 2">
            2
          </a>
        </li>

        <li>
          <a href="./" aria-label="Next" onClick={onClickNext}>
            <Icon icon="arrow-right" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  onClick: PropTypes.func,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  pages: PropTypes.string,
};

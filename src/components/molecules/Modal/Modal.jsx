import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BtnSimple } from "getbasecore/Atoms";
import "./core_modal.scss";

function Modal({ modal, modalActiveValue, modalHeaderValue, modalBodyValue, modalFooterValue, modalCSSValue }) {
  const [stateModal, setStateModal] = useState({
    modalActive: undefined,
    modalHeader: undefined,
    modalBody: undefined,
    modalFooter: undefined,
    modalCSS: undefined,
  });
  const { modalActive, modalHeader, modalBody, modalFooter, modalCSS } = stateModal;

  const closeModal = () => {
    setStateModal({ ...stateModal, modalActive: false });
  };

  useEffect(() => {
    if (modal) {
      setStateModal({
        modalActive: modal.active,
        modalHeader: modal.header,
        modalBody: modal.body,
        modalFooter: modal.footer,
        modalCSS: modal.css,
      });
    } else if (modal === false) {
      setStateModal({
        modalActive: false,
      });
    }
  }, [modal]);

  return (
    <div className={`modal ${modalCSS || modalCSSValue} ${modalActive || modalActiveValue ? "is-shown" : ""}`}>
      <div className="modal__box">
        <div className="modal__header">
          {modalHeader || modalHeaderValue}
          <button className="modal__close" type="button" aria="Close" onClick={() => closeModal()}>
            &times;
          </button>
        </div>
        <div className="modal__body">{modalBody || modalBodyValue}</div>
        <div className="modal__footer">
          {!modalFooter && !modalFooterValue && (
            <BtnSimple css="btn-simple--1" type="button" aria="Next" onClick={() => closeModal()}>
              Close
            </BtnSimple>
          )}
          {modalFooter || modalFooterValue}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.element, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.element, PropTypes.string]),
  css: PropTypes.string,
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  children: "",
  footer: "",
  css: "",
  onClick: () => {},
};

export default Modal;

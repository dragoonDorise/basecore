import React, { useState } from "react";
export const Marker = ({ name, address, onClick, img, id }) => {
  const [state, setState] = useState({ visible: false });
  const { visible } = state;
  const toggleInfo = (e) => {
    const { visible } = state;

    visible ? setState({ visible: false }) : setState({ visible: true });
  };

  return (
    <button type="button" className="gmap__marker" onClick={toggleInfo}>
      <div className={`gmap__marker-content ${visible ? "" : "is-hidden"} `}>
        <span className="gmap__marker-close" onClick={toggleInfo}>
          &times;
        </span>
        {img && <img className="gmap__marker-img" src={img} alt={name} />}
        <div className="gmap__marker-title">{name}</div>
        <div className="gmap__marker-address">{address}</div>
        <span className="btn-simple btn-simple--1" onClick={() => onClick(id)}>
          Seleccionar
        </span>
      </div>
      1
    </button>
  );
};

import React from "react";
export const BtnGroup = ({ children }) => {
  return (
    <>
      <div className="btn-group" role="group">
        {children}
      </div>
    </>
  );
};

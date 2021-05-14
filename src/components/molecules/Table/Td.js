import React, { useState } from "react";

export const Td = ({ children, dataTH }) => {
  // if (headValue === true) {
  //   return <th>{children}</th>;
  // } else {
  // console.log(dataTH);
  return <td data-th={dataTH}>{children}</td>;
  // }
};

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Error } from "../pages/Error";

const path = `${process.env.PUBLIC_URL}`;

export const AppRouter = () => {
  return (
    <BrowserRouter path={path}>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route exact path={`${path}/`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

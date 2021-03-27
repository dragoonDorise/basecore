import React from "react";
const content = require("../data/lang.es.json");
const errorContent = content.error;

export const Error = () => {
  return (
    <main>
      <h1 className="h1">{errorContent.title}</h1>
    </main>
  );
};

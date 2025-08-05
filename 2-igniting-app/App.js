import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div", // parent <div>
  { id: "parent" }, // with id="parent"
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I am Priyanka"),
      React.createElement("h2", {}, "I am H2"),
    ],
    React.createElement("h3", {}, "I am H3")
  ),
  React.createElement("h4", {}, "I am H4")
);

root.render(parent);

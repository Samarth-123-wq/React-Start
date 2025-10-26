// const heading = React.createElement(
//   "h2",
//   { id: "headings" },
//   "Hello from react"
// );

// const root = ReactDOM.createRoot(document.getElementById("roots"));
// console.log(root);
// root.render(heading);

// JSX is HTML like syntax basically to merge javascript and html

import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = (
  <>
    <h1 id="headings" className="Data">
      This is a jsx
    </h1>
    <h2>Hello</h2>
  </>
);

const FunctionalComponent = () => (
  <h2>
    {2 + 2}
    {jsxheading}
    <h1>hello</h1>
    <div>Hello</div>
  </h2>
);

const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(<FunctionalComponent />);

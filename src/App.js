// // const heading = React.createElement(
// //   "h2",
// //   { id: "headings" },
// //   "Hello from react"
// // );

// // const root = ReactDOM.createRoot(document.getElementById("roots"));
// // console.log(root);
// // root.render(heading);

// // JSX is HTML like syntax basically to merge javascript and html

// import React from "react";
// import ReactDOM from "react-dom/client";

// const jsxheading = (
//   <>
//     <h1 id="headings" className="Data">
//       This is a jsx
//     </h1>
//     <h2>Hello</h2>
//   </>
// );

// const FunctionalComponent = () => (
//   <h2>
//     {2 + 2}
//     {jsxheading}
//     <h1>hello</h1>
//     <div>Hello</div>
//   </h2>
// );

// const root = ReactDOM.createRoot(document.getElementById("roots"));
// root.render(<FunctionalComponent />);

/// updates

// const heading = React.createElement(
//   "h2",
//   { id: "headings" },
//   "Hello from react"
// );

// const root = ReactDOM.createRoot(document.getElementById("roots"));
// console.log(root);
// root.render(heading);

// JSX is HTML like syntax basically to merge javascript and html

/**
 * Always the first step of UI
 * Planning - The mock UI
 *
 * majory - 3 Components
 * Header
 * Body
 * Footer
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// const jsxheading = (
//   <>
//     <h1 id="headings" className="Data">
//       This is a jsx
//     </h1>
//     <h2>Hello</h2>
//   </>
// );

// const FunctionalComponent = () => (
//   <h2>
//     {2 + 2}
//     {jsxheading}
//     <h1>hello</h1>
//     <div>Hello</div>
//   </h2>
// );

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(<AppLayout />);

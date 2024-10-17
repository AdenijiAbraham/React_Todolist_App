import React from "react";
//import ReactDom from "react-dom";

import App from './App';
import { createRoot } from "react-dom/client";


// ReactDom.render(<App />, document.querySelector('#root'));

const Root = createRoot(document.getElementById('root'));
  Root.render(<App />);


// import React from "react";
// import App from './App';
// import { createRoot } from "react-dom/client";

// // Ensure there is an element with id 'root' in your HTML file
// const rootElement = document.getElementById('root');

// if (rootElement) {
//   const root = createRoot(rootElement);
//   root.render(<App />);
// } else {
//   console.error('Could not find root element to mount React App');
// }

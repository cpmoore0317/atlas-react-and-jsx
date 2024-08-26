import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root for React
const root = ReactDOM.createRoot(rootElement);

// Render the App component to the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

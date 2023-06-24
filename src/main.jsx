import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ForumProvider, useForum } from "./contexts/forum-context.jsx";
export { useForum };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ForumProvider>
        <App />
      </ForumProvider>
    </Router>
  </React.StrictMode>
);

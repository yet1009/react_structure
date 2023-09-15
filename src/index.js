import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./pages/App";
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const RouterFrame = ({ children }) => {
    return (
        <Router>
            {children}
        </Router>
    )
}


root.render(
  <RouterFrame>
    <App />
  </RouterFrame>
);


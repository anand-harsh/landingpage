import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
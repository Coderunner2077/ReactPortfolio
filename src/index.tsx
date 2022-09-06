import './css/main.css';
import React from "react";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as StoreProvider } from "react-redux";
import store from "./store/store";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<StoreProvider store={store}><App /></StoreProvider>);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextApp from './AppContext';

ReactDOM.render(
  <React.StrictMode>
    <ContextApp>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextApp>
  </React.StrictMode>,
  document.getElementById("root")
);
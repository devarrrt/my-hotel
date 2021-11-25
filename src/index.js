import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextApp from './AppContext';
import { Provider } from 'react-redux';
import { store } from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextApp>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextApp>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
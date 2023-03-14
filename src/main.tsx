import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BottomNav from './components/BottomNav';
import { BrowserRouter } from 'react-router-dom';
import 'reset-css';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <BottomNav />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

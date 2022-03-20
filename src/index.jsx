import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SalaryProvider from './context/SalaryProvider';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <SalaryProvider>
        <App />
      </SalaryProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();

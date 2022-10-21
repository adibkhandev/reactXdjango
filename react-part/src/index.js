import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Admin from './Admin';
import Searchbar from './App2'
import {BrowserRouter} from 'react-router-dom'
import Routing from'./App'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

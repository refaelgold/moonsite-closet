import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from "./Components/Navigation";
import './Styles/Index.css';
import Index from './Pages/Index';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n.tsx';//GLOBAL CALL

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Navigation/>
      <Index/>
  </React.StrictMode>
);

document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

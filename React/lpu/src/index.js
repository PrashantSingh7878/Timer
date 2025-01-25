import React from 'react';
import ReactDOM from 'react-dom/client';
// import Reducer from './components/Reducer';
// import './index.css';
// import App from './App';
// import Table from './components/practise/table';
// import Signup from './components/practise/Signup';
// import Clock from './components/practise/Clock';
// import Clean from './components/practise/cleanup/Clean';
import Timer from './components/practise/project/Timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


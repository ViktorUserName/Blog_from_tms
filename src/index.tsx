import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import './index.scss';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <Posts/>
  </React.StrictMode>
);


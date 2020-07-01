import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './SocialWeb/header/header.jsx';
import * as serviceWorker from './serviceWorker';
import Body from './SocialWeb/body/body.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Body />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

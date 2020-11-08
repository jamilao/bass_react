import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './setup/serviceWorker';
// import Homepage from './components/homepage';
import MainMenu from './components/mainMenu';
//import SignIn from './components/signIn';

ReactDOM.render(
  <div><MainMenu /></div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

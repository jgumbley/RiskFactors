import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './.declare_modules.d';
import 'materialize-css/dist/css/materialize.min.css'

import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from './firebaseConfig';

import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

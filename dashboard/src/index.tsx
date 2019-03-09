import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from './firebaseConfig';

import * as firebase from "firebase";

/*  API key for dev is here
    it is not a secret, it can't be due to the way javascript in the browser works
    TODO: will need to alter (webpack transform?) with other environments
    TODO: need to ensure that server side security rules are configured when data is added
*/
firebase.initializeApp(firebaseConfig);

var functions = firebase.functions();

var callableFunction = functions.httpsCallable('callable');

callableFunction().then(function(result) {
    // Read result of the Cloud Function.
    console.log(JSON.stringify(result));
  });


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

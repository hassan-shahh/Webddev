import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import App3 from './App3';
//import App2 from './App2';
//import App5 from './App5';
//import App6 from './App6';
//import App4 from './App4';
//import App7 from './App7'
//import App8 from './App8'
//import App from './App10'
//import App11 from './App11'
//import Football from './Football'
import Connectss from './Connectss'
//import App19 from './App20'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Connectss />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
//
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// 
import 'bootstrap/dist/js/bootstrap.js';
//
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.unregister();
// serviceWorker.register();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Study from './Study';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/app" component={App}></Route>
      <Route path="/study" component={Study}></Route>
    </HashRouter>

  </React.StrictMode>,
  document.getElementById('root')
);



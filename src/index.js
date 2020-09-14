import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import Hud from './components/Hud';
import Api from './api/Api';

require('./style.css');

ReactDOM.render(
  <Hud route={route}/>,
  document.getElementById('app')
);

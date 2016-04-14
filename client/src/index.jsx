import React from 'react';
import ReactDOM from 'react-dom';
import Hud from './components/Hud';
import Api from './api/Api';
import Book from './Book';

require('./style.css');

const routes = <Route component= {Hud}>
  <Route path="/" component=
</Route>

ReactDOM.render(
  <Hud route={route}/>,
  document.getElementById('app')
);

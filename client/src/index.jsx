import React from 'react';
import ReactDOM from 'react-dom';
import {HudContainer} from './components/Hud';
import {Router, route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import app from './components/App';
import Api from './api/Api';
import Book from './Book';

require('./style.css');

const routes = <Route component={App}>
  <Route path="/" component={Hud}/>
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

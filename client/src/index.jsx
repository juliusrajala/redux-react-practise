import React from 'react';
import ReactDOM from 'react-dom';
import {Router, route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {HudContainer} from './components/Hud';
import reducer from './reducer';
import app from './components/App';
import {data} from './api/history_api';
import Book from './components/Book';

require('./style.css');

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state:{
    points: data.points,
    route: data.route
  }
})

const routes = <Route component={App}>
  <Route path="/" component={Hud}/>
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

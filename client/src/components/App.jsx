import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {createStore} from 'redux';

import {HudContainer} from './components/Hud';
import reducer from './reducer';

import {Router, route, hashHistory} from 'react-router'; //Still needs routing implementation, check full-stack guide.

require('./style.css');


const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state:{
    points: data.points,
    route: data.route
  }
})

export default class App extends Component({
  render(){
    return (
      <Provider store={store}>
        <HudContainer />
      </Provider>
    )
  }
});

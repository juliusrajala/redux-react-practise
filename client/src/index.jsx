import React from 'react';
import ReactDOM from 'react-dom';
import Hud from './components/Hud';

const data = ['First', 'Second', 'Third', 'Fourth'];
const route = {
  x: 5,
  y: 4,
  name: 'Turku Tour',
  locations: [
    '213adfs2'
  ]
};

ReactDOM.render(
  <Hud route={route}/>,
  document.getElementById('app')
);

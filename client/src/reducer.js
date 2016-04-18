import {Map} from 'immutable';
import { MapStates, changeRoute } from './constants/actionTypes';
//const { MAP_EMPTY, MAP_LOADING, MAP_FINISHED } = mapState;

console.log(changeRoute('Test'));

function setState(state, newState){
  return state.merge(newState);
};

// Route acts as the name of the route the user has selected.
// Points is a reference to the points of interest on chosen route.
const defaultState = {
  route: null,
  mapState: MapStates.MAP_EMPTY,
  points: []
};

export default function(state = defaultState, action){
  switch(action.type){
    case 'CHANGE_ROUTE':
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case 'ADD_TO_ROUTE':
      return Object.assign({}, state, {
        points: [
          ...state.points,
          {
            id: action.id
          }
        ]
      })
    default:
      return state;
  }
};

import {Map} from 'immutable';
import { combineReducers } from 'redux';
import { MapStates} from './constants/actionTypes';
import { changeRoute } from './actions';
//const { MAP_EMPTY, MAP_LOADING, MAP_FINISHED } = mapState;


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

function pointsList(state = [], action){
  switch(action.type){
    case 'ADD_TO_ROUTE':
      return [
        ...state,
        {
          id: action.id
        }
      ];
    default:
      return state;
  }
}

function routeFilter(state = defaultState, action){
  switch(action.type){
    case 'CHANGE_ROUTE':
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
};

const libraryApp = combineReducers({
  pointsList,
  routeFilter
});

export default libraryApp;

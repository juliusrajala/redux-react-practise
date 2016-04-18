export const CHANGE_ROUTE = 'CHANGE_ROUTE';

//States for handling Points of interest
export const CHECK_IN = 'CHECK_IN';
export const ADD_TO_ROUTE = 'ADD_TO_ROUTE';

//States for the map
export const MapStates = {
  MAP_LOADED: 'MAP_LOADED',
  MAP_LOADING: 'MAP_LOADING',
  MAP_EMPTY: 'MAP_EMPTY'
}

// Action creators
export function changeRoute(text){
  return {type: CHANGE_ROUTE, text}
};

export function addToRoute(ID){
  return {type: ADD_TO_ROUTE, ID}
};

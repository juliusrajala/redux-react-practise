import * from './constants/actionTypes';

// rakennettu Redux.js tutoriaalin RedditAPIn pohjalta.
// http://redux.js.org/docs/advanced/AsyncActions.html

// Action creators
export function changeRoute(text){
  return {type: CHANGE_ROUTE, text}
};

export function addToRoute(ID){
  return {type: ADD_TO_ROUTE, ID}
};


//API actions
function requestData(id){
  return {
    type: REQUESTS_DATA,
    id
  }
}

function receiveData(id, json){
  return{
    type: RECEIVE_DATA,
    id,
    books: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}


export function fetchData(id){
  return function(id){
    //Handle API call here
    let json = {
      data:{
        route: 'xyz',
        points: ['Who', 'what', 'where']
      }
    }
    dispatch(receiveData(id, json))
  }
}

//API calls for fetching list of books for display


export function fetchLibrary(){
  return function (id){
    let books = [
      'Who',
      'What',
      'Where'
    ];
    dispatch()
  }
}

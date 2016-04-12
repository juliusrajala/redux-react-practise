const ADDRESS_ROOT = 'http://localhost:3000/';
const TEST_CALL = 'TEST';
const TEST_CALL_TWO = 'TEST2';
const LIST_CALL = 'LIST';

const data = ['First', 'Second', 'Third', 'Fourth'];
const route = {
  x: 5,
  y: 4,
  name: 'Turku Tour',
  locations: [
    '213adfs2'
  ]
};

export default function Api(route, id=null){
  switch(route){
    case TEST_CALL:
      return route;
    case TEST_CALL_TWO:
      console.log('List object 2');
      break;
    case LIST_CALL:
      console.log('List all');
      return data;
    default:
      console.log('none called');
      break;
  }
}

// It is important to remember there is only a single store in a redux application.

import { createStore } from 'redux';
import libraryApp from './reducer';

//Store may optionally be initialized with second argument to createstore.
//Useful eg. for hydrating client state to match state of redux app on server.
let store = createStore(libraryApp);

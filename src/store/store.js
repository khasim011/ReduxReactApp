// store.js
import {
  createStore,
} from 'redux';
import {  
  reducers
} from '.././reducers/reducer';

export function configureStore(initialState = {}) {  
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
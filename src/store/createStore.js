import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';

export default function store () {
  const store = createStore(rootReducer, applyMiddleware());
  return store;
}
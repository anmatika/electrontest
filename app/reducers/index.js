// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import crypter from './crypter';

const rootReducer = combineReducers({
  counter,
  crypter,
  router
});

export default rootReducer;

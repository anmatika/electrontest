// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import crypter from './crypter';
import poloniex from './poloniex';

const rootReducer = combineReducers({
  counter,
  crypter,
  poloniex,
  router
});

export default rootReducer;

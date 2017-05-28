// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import crypter from './crypter';
import poloniex from './poloniex';

const rootReducer = combineReducers({
  counter,
  crypter,
  poloniex,
  router,
  form: formReducer
});

export default rootReducer;

// import { tradingApi } from 'poloniex-api';
import tradingApi from './tradingApi';
import streamApi from './streamApi';
import keys from '../../../keys/apikeys';
import objectHelper from '../utils/objectHelper';

export const GET_BALANCES = 'GET_BALANCES';
export const SHOW_TICKER = 'SHOW_TICKER';
export const SHOW_OPEN_ORDERS = 'SHOW_OPEN_ORDERS';
export const SET_INITIAL_VALUES = 'SET_INITIAL_VALUES';
export const BUY = 'BUY';
export const SHOW_ERROR = 'SHOW_ERROR';

const api = tradingApi.create(keys.poloniex_api_key, keys.poloniex_secret);

export function setInitialValues() {
  return {
      type: SET_INITIAL_VALUES
  };
}

export function buy(data) {
  return {
      type: BUY,
      data
  };
}

export function getBalances(data) {
  return {
      type: GET_BALANCES,
      data
  };
}

export function showTicker(data) {
  return {
      type: SHOW_TICKER,
      data
  };
}

export function showOpenOrders(data) {
  return {
      type: SHOW_OPEN_ORDERS,
      data
  };
}

export function showError(data) {
  return {
      type: SHOW_ERROR,
      data
  };
}

export function getBalancesAsync() {
  return (dispatch: () => void, getState) => {
    api.returnBalances()
      .then((res) => {
        console.log(res.body);
        return dispatch(getBalances(
          objectHelper.getNonEmptyArrayValuesFromObject(JSON.parse(res.body))));
      }).catch(err => console.log('err', err));
  };
}

export function showOpenOrdersAsync() {
  return (dispatch: () => void, getState) => {
    api.returnOpenOrders({ currencyPair: 'all' })
      .then((res) => {
        console.log(res.body);
        return dispatch(showOpenOrders(res.body));
      }).catch(err => console.log('err', err));
  };
}

export function buyAsync({ currencyPair, amount, rate }) {
  return (dispatch: () => void, getState) => {
    api.buy({ currencyPair, amount, rate }).then(msg => {
      return console.log(msg.body);
    }).catch(err => {
      dispatch(showError(err));
    });
  };
}

export function showTickerAsync() {
  return (dispatch: () => void, getState) => {
    streamApi.create({ subscriptionName: 'ticker' }, (msg) => {
      console.log(msg);
    });
  };
}

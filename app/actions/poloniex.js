// import { tradingApi } from 'poloniex-api';
import tradingApi from './tradingApi';
import keys from '../../../keys/apikeys';

export const GET_BALANCES = 'GET_BALANCES';

export function getBalances(data) {
  return {
      type: GET_BALANCES,
      data
  };
}

export function getBalancesAsync() {
  return (dispatch: () => void, getState) => {
      const api = tradingApi.create(keys.poloniex_api_key, keys.poloniex_secret);
       api.returnBalances()
      .then((res) => {
        console.log(res.body);
        return dispatch(getBalances(res.body));
      }).catch(err => console.log('err', err));
  };
}

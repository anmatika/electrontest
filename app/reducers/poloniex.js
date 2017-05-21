// @flow
import { GET_BALANCES } from '../actions/poloniex';

export default function crypter(state = {}, action) {
  switch (action.type) {

    case GET_BALANCES:
      console.log('state', state);
      console.log('action.data', action.data);
      return Object.assign({}, state, { balances: action.data });

    default:
      console.log('state default', state);

      return state;
  }
}

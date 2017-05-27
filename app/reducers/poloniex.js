// @flow
import { GET_BALANCES, SHOW_OPEN_ORDERS, SET_INITIAL_VALUES } from '../actions/poloniex';
import objecthelper from '../utils/objectHelper';

export default function crypter(state = {}, action) {
  switch (action.type) {

    case SET_INITIAL_VALUES:
      return {
        openOrders: [{
          values: [{}]
        }]
      };

    case GET_BALANCES:
      console.log('state', state);
      console.log('action.data', action.data);
      return Object.assign({}, state, { balances: action.data });

    case SHOW_OPEN_ORDERS:
      console.log('state', state);
      console.log('action.data', action.data);

      const pruned = objecthelper.getNonEmptyArrayValuesFromObject(JSON.parse(action.data));

      console.log('pruned', pruned);
      return Object.assign({}, state, { openOrders: pruned });

    default:
      console.log('state default', state);

      return state;
  }
}

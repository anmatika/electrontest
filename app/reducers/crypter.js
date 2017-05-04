// @flow
import { ENCRYPT, MESSAGE_CHANGED, SECRET_CHANGED } from '../actions/crypter';

export default function crypter(state = {}, action) {
  switch (action.type) {
    case ENCRYPT:
      console.log('state', state);
      console.log('action.data', action.data);

      return Object.assign({}, state, { hash: action.data });
    case MESSAGE_CHANGED:
      console.log('state', state);
      console.log('action.data', action.data);
      return Object.assign({}, state, { message: action.data });
    case SECRET_CHANGED:
      console.log('state', state);
      console.log('action.data', action.data);
      return Object.assign({}, state, { secret: action.data });
    default:
      console.log('state default', state);
      return state;
  }
}

// @flow
import { ENCRYPT, DECRYPT, DECRYPT_HASH_CHANGED, DECRYPT_SECRET_CHANGED, ENCRYPT_MESSAGE_CHANGED, ENCRYPT_SECRET_CHANGED } from '../actions/crypter';

export default function crypter(state = {}, action) {
  switch (action.type) {

    case ENCRYPT:
      console.log('state', state);
      console.log('action.data', action.data);

      return Object.assign({}, state, { hash: action.data });

    case DECRYPT:
      console.log('state', state);
      console.log('action.data', action.data);

      return Object.assign({}, state, { decryptedMessage: action.data });

    case DECRYPT_HASH_CHANGED:
      console.log('state', state);
      console.log('action.data', action.data);
      return Object.assign({}, state, { decryptHash: action.data });

    case DECRYPT_SECRET_CHANGED:
      console.log('state', state);
      console.log('action.data', action.data);
      return Object.assign({}, state, { decryptSecret: action.data });

    case ENCRYPT_MESSAGE_CHANGED:
      console.log('state', state);
      console.log('action.data', action.data);
      return Object.assign({}, state, { message: action.data });

    case ENCRYPT_SECRET_CHANGED:
      console.log('state', state);
      console.log('action.data', action.data);
      return Object.assign({}, state, { secret: action.data });

    default:
      console.log('state default', state);
      return state;
  }
}

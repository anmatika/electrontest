// @flow
import aes from 'aes192-anmatika';
export const ENCRYPT = 'ENCRYPT';
export const DECRYPT = 'DECRYPT';
export const MESSAGE_CHANGED = 'MESSAGE_CHANGED';
export const SECRET_CHANGED = 'SECRET_CHANGED';
export const DECRYPT_HASH_CHANGED = 'DECRYPT_HASH_CHANGED';
export const DECRYPT_SECRET_CHANGED = 'DECRYPT_SECRET_CHANGED';

export function encrypt(data) {
  console.log('encrypt');
  return {
      type: ENCRYPT,
      data
  };
};

export function decrypt(data) {
  return {
      type: DECRYPT,
      data
  };
};
export function incrementAsync(delay: number = 1000) {
  return (dispatch: () => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export function encryptAsync(data) {
  return (dispatch: () => void, getState) => {
      const state = getState().crypter;
      const hash = aes.encrypt(state.message, state.secret);
      dispatch(encrypt(hash));
  };
}
export function decryptAsync(data) {
  return (dispatch: () => void, getState) => {
      const state = getState().crypter;
      aes.decrypt(state.decryptHash, state.decryptSecret).then(message => {
        dispatch(decrypt(message));
      });
  };
}

export function decryptHashChanged(data){
  return {
      type: DECRYPT_HASH_CHANGED,
      data
  };
}

export function decryptSecretChanged(data){
  return {
      type: DECRYPT_SECRET_CHANGED,
      data
  };
}

export function messageChanged(data){
  return {
      type: MESSAGE_CHANGED,
      data
  };
}

export function secretChanged(data){
  return {
      type: SECRET_CHANGED,
      data
  };
}

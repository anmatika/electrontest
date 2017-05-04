// @flow
import aes from 'aes192-anmatika';
export const ENCRYPT = 'ENCRYPT';
export const MESSAGE_CHANGED = 'MESSAGE_CHANGED';
export const SECRET_CHANGED = 'SECRET_CHANGED';


function enc(message, secret) {
    const hash = aes.encrypt(message, secret);
    return hash;
}

function dec(hash, secret) {
    return aes.decrypt(hash, secret);
}
export function encrypt(data) {
  console.log('encrypt');
  return {
      type: ENCRYPT,
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
      const hash = enc(state.message, state.secret);
      dispatch(encrypt(hash));
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

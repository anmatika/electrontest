import React from 'react';

const CrypterEncrypt = ({ encryptAsync, encryptMessageChanged, encryptSecretChanged, state }) => {
    function encrypt() {
        encryptAsync();
    }

    function messageOnChange(e) {
        encryptMessageChanged(e.target.value);
    }

    function secretOnChange(e) {
        encryptSecretChanged(e.target.value);
    }

    return (
      <div>
          <input type="text" placeholder="message" onChange={messageOnChange} />
          <input type="text" placeholder="secret" onChange={secretOnChange} />
          <button type="text" onClick={encrypt}>Encrypt</button>
          <textarea value={state.hash} />
      </div>);
};
export default CrypterEncrypt;

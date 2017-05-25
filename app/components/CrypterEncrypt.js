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
          <textarea rows="12" placeholder="message" onChange={messageOnChange} />
          <textarea rows="12" placeholder="secret" onChange={secretOnChange} />
          <button onClick={encrypt}>Encrypt</button>
          <textarea value={state.hash} rows="12" />
      </div>);
};
export default CrypterEncrypt;

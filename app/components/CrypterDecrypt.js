import React from 'react';

const CrypterDecrypt = ({ decryptAsync, decryptHashChanged, decryptSecretChanged, state }) => {
    function decrypt() {
        decryptAsync();
    }

    function secretDecryptOnChange(e) {
        decryptSecretChanged(e.target.value);
    }

    function hashDecryptOnChange(e) {
        decryptHashChanged(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="hash" onChange={hashDecryptOnChange} />
            <input type="text" placeholder="secret" onChange={secretDecryptOnChange}/>
            <button type="text" onClick={decrypt}>Decrypt</button>
            <textarea value={state.decryptedMessage} />
        </div>);
};

export default CrypterDecrypt;

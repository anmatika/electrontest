import React from 'react';
import { Button } from 'react-bootstrap';

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
            <textarea placeholder="hash" rows="12" onChange={hashDecryptOnChange} />
            <textarea placeholder="secret" rows="12"onChange={secretDecryptOnChange}/>
            <Button bsStyle="primary" onClick={decrypt}>Decrypt</Button>
            <textarea value={state.decryptedMessage} rows="12" />
        </div>);
};

export default CrypterDecrypt;

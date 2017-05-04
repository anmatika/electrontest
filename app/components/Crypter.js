// @flow
import React, { Component } from 'react';

import crypter from 'aes192-anmatika';
import { Link } from 'react-router-dom';
import styles from './Counter.css';

class Crypter extends Component {
  constructor(){
      super();
  }
  props: {
     encrypt: () => void
  };

    /* static encrypt(message, secret) {
     *   const hash = crypter.encrypt(message, secret);
     *   console.log('hash', hash);
     * }

     * static decrypt(hash, secret) {
     *   return crypter.decrypt(hash, secret);
     * }
     */
  encrypt(e) {
      this.props.encryptAsync();
  }

  decrypt(e) {
      this.props.decryptAsync();
  }

  messageOnChange(e) {
      this.props.messageChanged(e.target.value);
  }

  secretOnChange(e) {
      this.props.secretChanged(e.target.value);
  }

  secretDecryptOnChange(e) {
      this.props.decryptSecretChanged(e.target.value);
  }

  hashDecryptOnChange(e) {
      this.props.decryptHashChanged(e.target.value);
  }

  render() {
      /* Crypter.encrypt('foo', 'bar');
       * Crypter.decrypt('80a7dd847ac22852b5f83d8145386b94', 'bar')
       *         .then(message => console.log('message', message))
       *         .catch(err => console.log('err', err));
       */
      /* console.log('foo')*/
    const { encryptAsync, messageChanged, secretChanged, state } = this.props;
    console.log('crypter.state', state);
    return (
      <div>
          <input type="text" placeholder="message" onChange={this.messageOnChange.bind(this)} />
          <input type="text" placeholder="secret" onChange={this.secretOnChange.bind(this)}/>
          <button type="text" onClick={this.encrypt.bind(this)}>Encrypt</button>
          <textarea value={state.hash}></textarea>
          <br />
          <input type="text" placeholder="hash" onChange={this.hashDecryptOnChange.bind(this)} />
          <input type="text" placeholder="secret" onChange={this.secretDecryptOnChange.bind(this)}/>
          <button type="text" onClick={this.decrypt.bind(this)}>Decrypt</button>
          <textarea value={state.decryptedMessage}></textarea>
          <div className={styles.backButton} data-tid="backButton">
            <Link to="/">
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
      </div>
    );
  }
}

export default Crypter;

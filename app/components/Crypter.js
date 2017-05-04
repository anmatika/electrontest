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

  messageOnChange(e) {
      console.log('messageonchange', e.target.value);
      this.props.messageChanged(e.target.value);
  }

  secretOnChange(e) {
      console.log('secretonchange', e.target.value);
      this.props.secretChanged(e.target.value);
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

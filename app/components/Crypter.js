// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import CrypterEncrypt from './CrypterEncrypt';
import CrypterDecrypt from './CrypterDecrypt';

class Crypter extends Component {
  props: {
     encrypt: () => void
  };

  render() {
    return (
      <div>
          <CrypterEncrypt {...this.props} />
          <CrypterDecrypt {...this.props} />
          <br />
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

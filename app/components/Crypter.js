// @flow
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import styles from './Counter.css';

class Crypter extends Component {
  props: {
    // increment: () => void,
    // incrementIfOdd: () => void,
    // incrementAsync: () => void,
    // decrement: () => void,
    // crypter: number
  };

  render() {
    // const { increment, incrementIfOdd, incrementAsync, decrement, crypter } = this.props;
    return (
      <div>
          <div className={styles.backButton} data-tid="backButton">
            <Link to="/">
                <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
          <input type="text" />
      </div>
    );
  }
}

export default Crypter;

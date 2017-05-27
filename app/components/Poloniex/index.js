import React from 'react';
import { Link } from 'react-router-dom';
import ShowBalances from './ShowBalances';
import Ticker from './Ticker';

const Poloniex = (props) => {
    return (
    <div>
          <ShowBalances {...props} />
          <Ticker {...props} />

          <Link to="/">
             <i className="fa fa-arrow-left fa-3x" />
          </Link>
    </div>);
 };

export default Poloniex;

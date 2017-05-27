import React from 'react';
import { Link } from 'react-router-dom';

const Ticker = ({ state, showTickerAsync }) => {
    function onClick(e) {
        showTickerAsync();
    }
    return (
    <div>
          Ticker
          <textarea value={state.ticker} />
          <button onClick={onClick}>Show ticker</button>

          <Link to="/">
             <i className="fa fa-arrow-left fa-3x" />
          </Link>
    </div>);
 };

export default Ticker;
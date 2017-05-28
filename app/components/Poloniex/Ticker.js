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

          
    </div>);
 };

export default Ticker;
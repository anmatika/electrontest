import React from 'react';

const Ticker = ({ state, showTickerAsync }) => {
    function onClick(e) {
        showTickerAsync();
    }
    return (
    <div>
          <h2>Ticker</h2>
          <textarea value={state.ticker} />
          <button onClick={onClick}>Show ticker</button>
    </div>);
 };

export default Ticker;
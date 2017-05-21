import React from 'react';

const Poloniex = ({ state, getBalancesAsync }) => {
    function onClick(e) {
        getBalancesAsync();
    }
    return (
    <div>
          Poloniex
          <textarea value={state.balances} />
          <button onClick={onClick}>Show balances</button>
    </div>);
 };

export default Poloniex;

import React from 'react';
import { Link } from 'react-router-dom';

const ShowBalances = ({ state, getBalancesAsync }) => {
    function onClick(e) {
        getBalancesAsync();
    }
    return (
    <div>
          ShowBalances
          <textarea value={state.balances} />
          <button onClick={onClick}>Show balances</button>

          <Link to="/">
             <i className="fa fa-arrow-left fa-3x" />
          </Link>
    </div>);
 };

export default ShowBalances;

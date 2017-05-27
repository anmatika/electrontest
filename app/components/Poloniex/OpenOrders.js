import React from 'react';
import { Link } from 'react-router-dom';

const OpenOrders = ({ state, showOpenOrdersAsync }) => {
    function onClick(e) {
        showOpenOrdersAsync();
    }
    function prune () {
    //     return `${state.openOrders[0].key}: amount: ${state.openOrders[0].values[0].amount}`;
        const keys = Object.keys(state.OpenOrders);
        return state.OpenOrders;
    }

    return (
    <div>
          OpenOrders
          <textarea value={'foo'} />
          <button onClick={onClick}>Show OpenOrders</button>

          <Link to="/">
             <i className="fa fa-arrow-left fa-3x" />
          </Link>
    </div>);
 };

export default OpenOrders;

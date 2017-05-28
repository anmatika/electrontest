import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';

const OpenOrders = ({ state, showOpenOrdersAsync }) => {
    function onClick(e) {
        showOpenOrdersAsync();
    }
    function getRows() {
        const rows = [];
        if (!state.openOrders) return rows;

        state.openOrders.forEach((currency) => {
            const row = { currency: currency.key };
            currency.value.forEach((value) => {
                row.amount = value.amount;
                row.rate = value.rate;
                row.total = value.total;
                row.type = value.type;
            });
            rows.push(row);
        });
        return rows;
    }

  return (
    <div>
          OpenOrders
          <Grid rows={getRows()} />
          <button onClick={onClick}>Show OpenOrders</button>
    </div>);
 };

export default OpenOrders;

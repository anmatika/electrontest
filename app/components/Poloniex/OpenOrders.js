import React from 'react';
import Grid from './Grid';

const OpenOrders = ({ state, showOpenOrdersAsync }) => {
    function onClick() {
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

    const columns = [
        { key: 'currency', name: 'Currency' },
        { key: 'amount', name: 'Amount' },
        { key: 'type', name: 'Type' },
        { key: 'total', name: 'Total' },
        { key: 'rate', name: 'Rate' }
        ];

    return (<div>
            <h2>Open orders</h2>
            <Grid rows={getRows()} columns={columns} />
            <button onClick={onClick}>Show OpenOrders</button>
        </div>);
 };

export default OpenOrders;

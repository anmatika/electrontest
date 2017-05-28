import React from 'react';
import { Button } from 'react-bootstrap';
import Grid from './Grid';

const ShowBalances = ({ state, getBalancesAsync }) => {
    function onClick() {
        getBalancesAsync();
    }

    function getRows() {
        if (!state.balances) return [];

        return state.balances
        .filter(b => b.value > 0)
        .map(b => ({ currency: b.key, balance: b.value }));
    }

    const columns = [
        { key: 'currency', name: 'Currency' },
        { key: 'balance', name: 'Balance' },
    ];

    return (
    <div>
        <h2>Balances</h2>
        <Grid rows={getRows()} columns={columns} />
        <Button bsStyle="primary" onClick={onClick} >Show balances</Button>
    </div>);
 };

export default ShowBalances;

import React from 'react';
import ReactDataGrid from 'react-data-grid';
import './Grid.css';

const Grid = ({ rows }) => {
    const columns = [
        { key: 'currency', name: 'Currency' },
        { key: 'amount', name: 'Amount' },
        { key: 'type', name: 'Type' },
        { key: 'total', name: 'Total' },
        { key: 'rate', name: 'Rate' }
        ];

   
    function rowGetter(i) {
        return rows[i];
    }
    if (rows.length === 0) return (<div />);
     return (

      <ReactDataGrid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        minHeight={500}
      />
    );
};

export default Grid;

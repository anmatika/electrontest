import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDataGrid from 'react-data-grid';
import { Link } from 'react-router-dom';

const OpenOrders = ({ state, showOpenOrdersAsync }) => {
    function onClick(e) {
        showOpenOrdersAsync();
    }
    function prune() {
    //     return `${state.openOrders[0].key}: amount: ${state.openOrders[0].values[0].amount}`;
        const keys = Object.keys(state.OpenOrders);
        return state.OpenOrders;
    }

    const columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' }];

  function createRows() {
        const rows = [];
        for (let i = 1; i < 1000; i++) {
        rows.push({
            id: i,
            title: `Title ${i}`,
            count: i * 1000
        });
        }

    return rows;
  }

  const rows = createRows();
  function rowGetter(i) {
      return rows[i];
  }

  return (
    <div>
          OpenOrders
          <ReactDataGrid
            columns={columns}
            rowGetter={rowGetter}
            rowsCount={rows.length}
            minHeight={500}
          />

          <textarea value={'foo'} />
          <button onClick={onClick}>Show OpenOrders</button>

          <Link to="/">
             <i className="fa fa-arrow-left fa-3x" />
          </Link>
    </div>);
 };

export default OpenOrders;

import React from 'react';
import ReactDataGrid from 'react-data-grid';

const Grid = () => {
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

    <ReactDataGrid
      columns={columns}
      rowGetter={rowGetter}
      rowsCount={rows.length}
      minHeight={500}
    />
  );
};

export default Grid;

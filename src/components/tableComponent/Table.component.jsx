import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

function Table(props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={props.pageSize}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: props.columnField,
                  operatorValue: props.operatorValue,
                  value: props.value,
                },
              ],
            },
          },
        }}
      />
    </div>
  );
}

export default Table;

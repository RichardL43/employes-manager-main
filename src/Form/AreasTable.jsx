import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

const columns = [
  { 
    field: 'id',
    headerName: 'ID',
    width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
];

export function AreasTable() {
  return (
    <div style={{ width: '100%' }}>
      <h3>Areas Asociadas</h3>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

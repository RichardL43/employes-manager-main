import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const FloatingActionButtons = () => {
  return (
    <>

    <Box sx={{ '& > :not(style)': { m: 0 } }}>
   
      <Fab color="red" aria-label="edit">
        <EditIcon />
      </Fab>
    </Box>
    </>
  );
}
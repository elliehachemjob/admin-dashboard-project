import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Input(props) {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-name'
        label={props.label}
        value={props.name}
        name={props.formName}
        onChange={props.handleChange}
        style={props.style}
      />
    </Box>
  );
}

export default Input;

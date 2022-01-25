import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import './input.styles.css';

function Input(props) {
  return (
    <>
      <Box
        component='form'
        sx={props.style ? props.style : { m: 1, width: '25ch' }}
        noValidate
        autoComplete='off'
      >
        <TextField
          multiline={props.multiline}
          rows={props.rows}
          maxRows={props.maxRows}
          id='outlined-name'
          label={props.label}
          value={props.name}
          name={props.formName}
          onChange={props.handleChange}
          style={props.style}
          InputProps={{ className: props.textFieldStyles }}
          sx={props.sx}
        ></TextField>
      </Box>
    </>
  );
}

export default Input;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './searchInput.styles.css';
function SearchInput(props) {
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={props.options}
      sx={props.sx ? props.sx : { width: 300 }}
      size={props.size ? props.size : ''}
      className={props.className}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}

export default SearchInput;

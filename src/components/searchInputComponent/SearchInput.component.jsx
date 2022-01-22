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
      sx={
        props.sx
          ? props.sx
          : {
              border: '1px solid #94b3fd20',
              backgroundColor: '#2B3A6720',
              minWidth: 189.3,
              borderRadius: '10px',
              opacity: 0.5,
              margin: 1,
              '&:hover,&:focus': {
                border: '2px solid #94b3fd20',
                backgroundColor: '#FDF0D520',
                opacity: 0.6,
              },
            }
      }
      size={props.size ? props.size : ''}
      className={props.className}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}

export default SearchInput;

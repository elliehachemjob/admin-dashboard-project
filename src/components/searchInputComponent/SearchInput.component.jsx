import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './searchInput.styles.css';
function SearchInput(props) {
  return (
    <div className={props.parent}>
      <div className={props.div1}>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={props.options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label={props.label} />
          )}
        />
      </div>
    </div>
  );
}

export default SearchInput;

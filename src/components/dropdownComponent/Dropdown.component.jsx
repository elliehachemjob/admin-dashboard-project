import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown(props) {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id='demo-simple-select-autowidth-label'>
          {props.inputLabel}
        </InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={props.value}
          onChange={props.handleChange}
          autoWidth
          label={props.label}
        >
          {props.items.map((item) => {
            return <MenuItem value={item.value}>{item.value}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default Dropdown;

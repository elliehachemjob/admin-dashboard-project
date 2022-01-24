import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown(props) {
  return (
    <>
      <FormControl sx={props.sx ? props.sx : { m: 0, minWidth: 160 }}>
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
          sx={
            props.sx
              ? props.sx
              : {
                  border: '',
                  backgroundColor: '',
                  minWidth: 300,
                  borderRadius: '10px',
                  opacity: 1,

                  '&:hover,&:focus': {
                    border: '1',
                    backgroundColor: '',
                    opacity: 1,
                  },
                }
          }
        >
          {props.items.map((item) => {
            return (
              <MenuItem style={{ width: 300 }} value={item.value}>
                {item.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default Dropdown;

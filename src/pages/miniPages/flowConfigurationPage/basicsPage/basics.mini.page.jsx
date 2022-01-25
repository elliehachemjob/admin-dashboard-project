import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import Dropdown from '../../../../components/dropdownComponent/SpecialDropdown.component';
import Input from '../../../../components/inputComponent/Input.component';
import ToggleList from '../../../../components/ListComponents/toggleListComponent/ToggleList.component';
import DropdownTagSelector from '../../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';

import { makeStyles } from '@material-ui/core/styles';

import './basics.mini.styles.css';
function Basics() {
  const [value, setValue] = useState();
  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];
  const [label1, setLabel1] = useState([
    { id: 1, label: 'Is Enabled' },
    { id: 2, label: 'Is Default' },
  ]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const useStyles = makeStyles((theme) => ({
    textField: {
      border: '',
      backgroundColor: '',
      borderRadius: '10px',
      opacity: 1,
      '&:hover,&:focus': {
        border: ' ',
        backgroundColor: '',
        opacity: 1,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {/* 1st */}
      <Label label='Configuration' className='header-basics' />
      <ToggleList
        key={label1.id}
        list={label1}
        parent='toggle-list-parent-basics'
        div1='div1-toggle-list-parent-basics'
        div2='div2-toggle-list-parent-basics'
      />
      <Label label='Title' className='header-basics' />
      <Input
        label='Activation Logins'
        style={{
          marginBottom: 2.5,
          marginLeft: 0.8,
          width: 190,
        }}
        textFieldStyles={classes.textField}
      />
      {/* 2nd */}
      <Label label='Type' className='header-basics' />
      <Label label='Select Permission' className='label-basics' />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Server - MT4'}
        sx={{ marginLeft: 0.2, minWidth: 190, borderRadius: 4 }}
      />
    </>
  );
}

export default Basics;

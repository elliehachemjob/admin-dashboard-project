import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import Dropdown from '../../../../components/dropdownComponent/SpecialDropdown.component';
import Input from '../../../../components/inputComponent/Input.component';
import ToggleList from '../../../../components/ListComponents/toggleListComponent/ToggleList.component';

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
      minWidth: 189.3,
      borderRadius: '10px',
      opacity: 1,

      '&:hover,&:focus': {
        border: ' ',
        backgroundColor: '',
        opacity: 1,
      },
      button: {
        backgroundColor: '#11468F',
        borderRadius: '20px',
        '&:hover': {
          backgroundColor: '#11468F50',
          borderRadius: '20px',
        },
      },
      dropdown: {
        border: '2px solid #94b3fd20',
        backgroundColor: '#94b3fd15',
        minWidth: 189.3,
        borderRadius: '10px',
        opacity: 0.3,
        '&:hover,&:focus': {
          border: '2px solid #94b3fd20',
          backgroundColor: '#94b3fd20',
          opacity: 0.3,
        },
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {/* 1st */}
      <Label label='Configuration' className='main-header-applicationFlow' />
      <ToggleList
        key={label1.id}
        list={label1}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      />
      <Label label='Title' className='main-header-applicationFlow' />
      <Input
        label='Activation Logins'
        style={{ marginTop: 2, marginBottom: 2, width: 300 }}
        textFieldStyles={classes.textField}
      />
      {/* 2nd */}
      <Label label='Type' className='main-header-applicationFlow' />
      <Label
        label='Select Permission'
        className='main-header-applicationFlow'
      />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Server - MT4'}
      />
    </>
  );
}

export default Basics;

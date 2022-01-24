import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import AddFields from '../../../../components/fieldsAddComponent/FieldsAdd.component';
import Input from '../../../../components/inputComponent/Input.component';
import { makeStyles } from '@material-ui/core/styles';
import Dropdown from '../../../../components/dropdownComponent/SpecialDropdown.component';
import DropdownTagSelector from '../../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';

import './conditions.mini.styles.css';
function Conditions() {
  const [value, setValue] = useState();
  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

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
      <Label label='Conditions' className='main-header-applicationFlow' />
      <Label
        label='Set Custom Conditions'
        className='main-header-applicationFlow'
      />
      <AddFields
        sx={{
          backgroundColor: '#04724D',
          borderRadius: '10px',
          fontWeight: 600,

          '&:hover': {
            backgroundColor: '#5E807F',
            borderRadius: '10px',
          },
        }}
        sx2={{
          backgroundColor: '#04724D',
          borderRadius: '10px',
          fontWeight: 600,
          marginTop: 2.5,
          '&:hover': {
            backgroundColor: '#5E807F',
            borderRadius: '10px',
          },
        }}
        items={menu}
        label={value}
        value={value}
        field1='Name'
        field2='Nationality'
        field3='Country '
        field4='KYC Profile'
        field5='Add Condition'
        isField6={true}
        testComponent1={
          <Input
            label='Activation Logins'
            style={{ marginTop: 2, marginBottom: 2, width: 300 }}
            textFieldStyles={classes.textField}
          />
        }
        testComponent2={<DropdownTagSelector />}
        testComponent3={<DropdownTagSelector />}
        testComponent4={
          <Dropdown
            items={menu}
            label={value}
            handleChange={handleChange}
            value={value}
            inputLabel={value ? value : 'Server - MT4'}
          />
        }
      />
    </>
  );
}

export default Conditions;

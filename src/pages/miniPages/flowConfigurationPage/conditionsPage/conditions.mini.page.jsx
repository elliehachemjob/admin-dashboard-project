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
    },
  }));

  const classes = useStyles();

  return (
    <>
      {/* <Label label='Conditions' className='header-conditions' /> */}
      <Label label='Set Custom Conditions' className='header-conditions' />
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
        field4='Profile'
        field5='Add Condition'
        isField6={true}
        testComponent1={
          <Input
            label='Activation Logins'
            style={{ width: 189.3 }}
            textFieldStyles={classes.textField}
          />
        }
        testComponent2={
          <DropdownTagSelector
            sx={{ width: 189.3 }}
            widthTagSelectorOpened={100}
          />
        }
        testComponent3={
          <DropdownTagSelector
            sx={{ width: 189.3 }}
            widthTagSelectorOpened={100}
          />
        }
        testComponent4={
          <Dropdown
            items={menu}
            label={value}
            handleChange={handleChange}
            value={value}
            inputLabel={value ? value : 'Server - MT4'}
            sx={{ width: 189.3 }}
          />
        }
      />
    </>
  );
}

export default Conditions;

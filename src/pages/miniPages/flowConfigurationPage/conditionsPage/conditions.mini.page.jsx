import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import AddFields from '../../../../components/fieldsAddComponent/FieldsAdd.component';
import Input from '../../../../components/inputComponent/Input.component';
import { makeStyles } from '@material-ui/core/styles';
import Dropdown from '../../../../components/dropdownComponent/SpecialDropdown.component';
import DropdownTagSelector from '../../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';
import { DeleteItemIcon } from '../../../../components/iconsComponent/Icons.component';
import SeeGroups from '../seeGroupsPage/seeGroups.mini.page';
import EditSubConditions from '../editSubConditionsPage/editSubConditions.mini.page';

import './conditions.mini.styles.css';
function Conditions() {
  const [value, setValue] = useState();
  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    textField: {
      background: 'linear-gradient(21deg, #10abff, #1beabd)',
      minWidth: 165,
      borderRadius: '15px',
      opacity: 1,

      '&:hover,&:focus': {
        border: ' ',
        backgroundColor: '',
        opacity: 1,
      },
    },
  }));

  const classes = useStyles();

  const handleEditSubProfileIcon = () => {
    alert('Handle Delete');
  };

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
            style={{
              width: 165,
            }}
            textFieldStyles={classes.textField}
          />
        }
        testComponent2={
          <DropdownTagSelector
            sx={{
              width: 165,
              background: 'linear-gradient(21deg, #10abff, #1beabd)',
              borderRadius: 4,
            }}
            widthTagSelectorOpened={100}
          />
        }
        testComponent3={
          <DropdownTagSelector
            sx={{
              width: 165,
            }}
            widthTagSelectorOpened={100}
          />
        }
        testComponent4={
          <div className='icons-component-wrapper-conditions'>
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Server - MT4'}
              sx={{
                width: 165,
                background: 'linear-gradient(21deg, #10abff, #1beabd)',
                borderRadius: 4,
              }}
              menuSx={{ width: 165 }}
            />
            <div className='icons-wrapper-conditions'>
              <SeeGroups />
              <EditSubConditions />
              <DeleteItemIcon
                className='deleteIcon-conditions'
                onClick={handleEditSubProfileIcon}
              />
            </div>
          </div>
        }
      />
    </>
  );
}

export default Conditions;

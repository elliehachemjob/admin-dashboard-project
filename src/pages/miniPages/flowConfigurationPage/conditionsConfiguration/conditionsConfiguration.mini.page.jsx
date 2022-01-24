import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import Button from '../../../../components/FlexibleButtonComponent/FlexibleButton.component';
import ToggleList from '../../../../components/ListComponents/toggleListComponent/ToggleList.component';
import DropdownTagSelector from '../../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';

import './conditionsConfiguration.mini.styles.css';

function ConditionsConfiguration() {
  const [label1, setLabel1] = useState([{ id: 1, label: 'Leader Board' }]);

  return (
    <>
      {/* 1st */}
      <Label
        label='Rejected Countries'
        className='main-header-applicationFlow'
      />
      <Label
        label='Select Countries You Want to Reject'
        className='main-header-applicationFlow'
      />
      <DropdownTagSelector />
      {/* 2nd */}
      <Label label='Condition Types' className='main-header-applicationFlow' />
      <Label
        label='Select One Condition Type Or More'
        className='main-header-applicationFlow'
      />
      <Button
        className='button-fieldsAdd'
        name={
          <div className='wrapper-addIcon-applicationFlow'>
            <Label
              label='Nationality '
              className='label-addIcon-applicationFlow'
            />
          </div>
        }
        variant='contained'
        sx={{
          backgroundColor: '#2B3A67',
          borderRadius: '10px',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#5E807F',
            borderRadius: '10px',
          },
        }}
      />
      <Button
        className='button-fieldsAdd'
        name={
          <div className='wrapper-addIcon-applicationFlow'>
            <Label
              label='Country of residence '
              className='label-addIcon-applicationFlow'
            />
          </div>
        }
        variant='contained'
        sx={{
          backgroundColor: '#2B3A67',
          borderRadius: '10px',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#5E807F',
            borderRadius: '10px',
          },
        }}
      />
      <Button
        className='button-fieldsAdd'
        name={
          <div className='wrapper-addIcon-applicationFlow'>
            <Label
              label='Reject U.S citizens'
              className='label-addIcon-applicationFlow'
            />
          </div>
        }
        variant='contained'
        sx={{
          backgroundColor: '#2B3A67',
          borderRadius: '10px',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#5E807F',
            borderRadius: '10px',
          },
        }}
      />
      <Button
        className='button-fieldsAdd'
        name={
          <div className='wrapper-addIcon-applicationFlow'>
            <Label label='Apply ' className='label-addIcon-applicationFlow' />
          </div>
        }
        variant='contained'
        sx={{
          backgroundColor: '#2B3A67',
          borderRadius: '10px',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#5E807F',
            borderRadius: '10px',
          },
        }}
      />

      {/* 3rd */}
      <ToggleList
        key={label1.id}
        list={label1}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      />
    </>
  );
}

export default ConditionsConfiguration;

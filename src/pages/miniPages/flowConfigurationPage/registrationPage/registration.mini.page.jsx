import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import Button from '../../../../components/FlexibleButtonComponent/FlexibleButton.component';
import FlowStepsModal from '../../applicationFlowPage/flowStepsModalPage/flowStepsModal.mini.page';
import ToggleList from '../../../../components/ListComponents/toggleListComponent/ToggleList.component';
import BuildForm from '../../../../components/buildFormComponent/BuildForm.component';

import './registration.mini.styles.css';

function Registration() {
  const [label1, setLabel1] = useState([
    { id: 1, label: 'Auto Login' },
    { id: 2, label: 'Green Theme' },
    { id: 3, label: 'Is Enabled' },
  ]);
  return (
    <>
      {/* 1st */}
      <Label label='Configuration' className='main-header-applicationFlow' />
      <Label
        label='Set Up Configuration'
        className='main-header-applicationFlow'
      />
      <ToggleList
        key={label1.id}
        list={label1}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      />
      {/* 2nd */}
      <Label label='Form' className='main-header-applicationFlow' />
      <Label label='Build The Form' className='main-header-applicationFlow' />

      <FlowStepsModal />
      <BuildForm />
      <Button
        className='button-fieldsAdd'
        name={
          <div className='wrapper-addIcon-applicationFlow'>
            <Label
              label='Apply Changes'
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
    </>
  );
}

export default Registration;

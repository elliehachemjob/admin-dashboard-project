import React, { useState } from 'react';
import Basics from './basicsPage/basics.mini.page';
import WalletConfiguration from './walletConfigurationPage/walletConfiguration.mini.page';
import ConditionsConfiguration from './conditionsConfiguration/conditionsConfiguration.mini.page';
import Conditions from './conditionsPage/conditions.mini.page';
import Registration from './registrationPage/registration.mini.page';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../../components/labelComponent/Label.component';
import {
  BlackCircleIcon,
  CancelCircleIcon,
  CorrectCircleIcon,
} from '../../../components/iconsComponent/Icons.component';
import BreakLine from '../../../components/breakLineComponent/BreakLine.component';

import './flowConfiguration.mini.styles.css';

function FlowConfiguration() {
  return (
    <>
      {/* 1st 
      1-5 parts leftSide */}
      <Label
        label='Basics'
        className='main-header-applicationFlow'
        size={18.72}
      />
      <CorrectCircleIcon />
      <BlackCircleIcon />
      <CancelCircleIcon />
      <BreakLine />
      {/* 2nd */}
      <Label
        label='Wallet Configuration'
        className='main-header-applicationFlow'
        size={18.72}
      />
      <CorrectCircleIcon />
      <BlackCircleIcon />
      <CancelCircleIcon />
      <BreakLine />
      {/* 3rd */}
      <Label
        label='Conditions Configuration'
        className='main-header-applicationFlow'
        size={18.72}
      />
      <CorrectCircleIcon />
      <BlackCircleIcon />
      <CancelCircleIcon />
      <BreakLine />
      {/* 4th */}
      <Label
        label='Conditions'
        className='main-header-applicationFlow'
        size={18.72}
      />
      <CorrectCircleIcon />
      <BlackCircleIcon />
      <CancelCircleIcon />
      <BreakLine />
      {/* 5th */}
      <Label
        label='Registration'
        className='main-header-applicationFlow'
        size={18.72}
      />
      <CorrectCircleIcon />
      <BlackCircleIcon />
      <CancelCircleIcon />
      <BreakLine />
      {/* 2th right side */}
      {/* 1st */}
      {/* <Basics /> */}
      {/* 2nd */}
      {/* <WalletConfiguration /> */}
      {/* 3rd */}
      {/* <ConditionsConfiguration /> */}
      {/* 4rd */}
      {/* <Conditions /> */}
      {/* 5th */}
      {/* <Registration /> */}
      {/* 3rd */}
      <Button
        className='button-fieldsAdd'
        name={
          <div className='wrapper-addIcon-applicationFlow'>
            <Label label='Save' className='label-addIcon-applicationFlow' />
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

export default FlowConfiguration;

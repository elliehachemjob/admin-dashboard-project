import React, { useState, useEffect } from 'react';
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

// make Container marginLeft to  0 or add props/redux etc

function FlowConfiguration() {
  const [basicsIcon, setBasicsIcon] = useState('default');
  const [rightSide, setRightSide] = useState('basics');
  const [walletConfigurationIcon, setWalletConfigurationIcon] =
    useState('default');
  const [conditionsConfigurationIcon, setConditionsConfigurationIcon] =
    useState('default');
  const [conditionsIcon, setConditionsIcon] = useState('default');
  const [registrationIcon, setRegistrationIcon] = useState('default');
  const BasicIcon = () => {
    if (basicsIcon === 'default') {
      return <BlackCircleIcon />;
    }
    if (basicsIcon) {
      return <CorrectCircleIcon />;
    }
    if (!basicsIcon) {
      return <CancelCircleIcon />;
    }
  };
  const WalletConfigurationIcon = () => {
    if (walletConfigurationIcon === 'default') {
      return <BlackCircleIcon />;
    }
    if (walletConfigurationIcon) {
      return <CorrectCircleIcon />;
    }
    if (!walletConfigurationIcon) {
      return <CancelCircleIcon />;
    }
  };
  const ConditionsConfigurationIcon = () => {
    if (conditionsConfigurationIcon === 'default') {
      return <BlackCircleIcon />;
    }
    if (conditionsConfigurationIcon) {
      return <CorrectCircleIcon />;
    }
    if (!conditionsConfigurationIcon) {
      return <CancelCircleIcon />;
    }
  };
  const ConditionsIcon = () => {
    if (conditionsIcon === 'default') {
      return <BlackCircleIcon />;
    }
    if (conditionsIcon) {
      return <CorrectCircleIcon />;
    }
    if (!conditionsIcon) {
      return <CancelCircleIcon />;
    }
  };
  const RegistrationIcon = () => {
    if (registrationIcon === 'default') {
      return <BlackCircleIcon />;
    }
    if (registrationIcon) {
      return <CorrectCircleIcon />;
    }
    if (!registrationIcon) {
      return <CancelCircleIcon />;
    }
  };
  const handleBasicsIcon = (e) => {
    setRightSide('basics');
    setBasicsIcon(true);

    if (e.detail > 1) {
      setBasicsIcon(false);
    }
  };
  const handleWalletConfigurationIcon = (e) => {
    setRightSide('Wallet Configuration');

    setWalletConfigurationIcon(true);

    if (e.detail > 1) {
      setWalletConfigurationIcon(false);
    }
  };
  const handleConditionsConfigurationIcon = (e) => {
    setRightSide('Conditions Configuration');

    setConditionsConfigurationIcon(true);
    if (e.detail > 1) {
      setConditionsConfigurationIcon(false);
    }
  };
  const handleConditionsIcon = (e) => {
    setRightSide('Conditions');

    setConditionsIcon(true);
    if (e.detail > 1) {
      setConditionsIcon(false);
    }
  };
  const handleRegistrationIcon = (e) => {
    setRightSide('Registration');
    setRegistrationIcon(true);
    if (e.detail > 1) {
      setRegistrationIcon(false);
    }
  };
  const RightSideBasics = () => {
    if (rightSide === 'basics') {
      return <Basics />;
    }
    if (rightSide === 'Wallet Configuration') {
      return <WalletConfiguration />;
    }
    if (rightSide === 'Conditions Configuration') {
      return <ConditionsConfiguration />;
    }
    if (rightSide === 'Conditions') {
      return <Conditions />;
    }
    if (rightSide === 'Registration') {
      return <Registration />;
    }
  };

  return (
    <div className='parent-wholeContainer'>
      {/* 1st 
      1-5 parts leftSide */}
      <div className='div1-wholeContainer'>
        <div className='wrapper-FlowConfiguration'>
          <div className='inner-iconWrapper-flowConfiguration'>
            <BasicIcon />
            <div className='inner-label-flowConfiguration'>
              <Label
                label='Basics'
                className='label-FlowConfiguration'
                size={18.72}
                onClick={handleBasicsIcon}
              />
            </div>
          </div>
          <div className='inner-breakLineWrapper-flowConfiguration'>
            <BreakLine className='breakLine-flowConfiguration' />
          </div>
          {/* 2nd */}

          <div className='inner-iconWrapper-flowConfiguration'>
            <WalletConfigurationIcon />
            <div className='inner-label-flowConfiguration'>
              <Label
                label='Wallet Configuration'
                className='label-FlowConfiguration'
                size={18.72}
                onClick={handleWalletConfigurationIcon}
              />
            </div>
          </div>
          <div className='inner-breakLineWrapper-flowConfiguration'>
            <BreakLine className='breakLine-flowConfiguration' />
          </div>
          {/* 3rd */}
          <div className='inner-iconWrapper-flowConfiguration'>
            <ConditionsConfigurationIcon />
            <div className='inner-label-flowConfiguration'>
              <Label
                label='Conditions Configuration'
                className='label-FlowConfiguration'
                size={18.72}
                onClick={handleConditionsConfigurationIcon}
              />
            </div>
          </div>

          <div className='inner-breakLineWrapper-flowConfiguration'>
            <BreakLine className='breakLine-flowConfiguration' />
          </div>

          {/* 4th */}
          <div className='inner-iconWrapper-flowConfiguration'>
            <ConditionsIcon />
            <div className='inner-label-flowConfiguration'>
              <Label
                label='Conditions'
                className='label-FlowConfiguration'
                size={18.72}
                onClick={handleConditionsIcon}
              />
            </div>
          </div>
          <div className='inner-breakLineWrapper-flowConfiguration'>
            <BreakLine className='breakLine-flowConfiguration' />
          </div>
          {/* 5th */}
          <div className='inner-iconWrapper-flowConfiguration'>
            <RegistrationIcon />
            <div className='inner-label-flowConfiguration'>
              <Label
                label='Registration'
                className='label-FlowConfiguration'
                size={18.72}
                onClick={handleRegistrationIcon}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 2nd */}
      <div className='div2-wholeContainer'>
        <RightSideBasics />
      </div>
      {/* 3rd last part  */}
      <div className='div3-wholeContainer'>
        <div className='parent-1Button-flowConfiguration'>
          <div className='div1-1Button-flowConfiguration'>
            <Button
              className='button-fieldsAdd'
              name={
                <div className=''>
                  <Label
                    label='Save'
                    className='label-addIcon-applicationFlow'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: '#2B3A67',
                borderRadius: '10px',
                fontWeight: 600,
                marginRight: 3,
                '&:hover': {
                  backgroundColor: '#5E807F',
                  borderRadius: '10px',
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowConfiguration;

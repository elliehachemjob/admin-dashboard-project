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
  const [basicBreakLine, setBasicBreakLine] = useState(true);
  const [WalletConfigurationBreakLine, setWalletConfiguration] = useState(true);
  const [ConditionsConfigurationBreakLine, setConditionsConfiguration] =
    useState(true);
  const [ConditionsBreakLine, setConditionsBreakLine] = useState(true);

  const BasicIcon = () => {
    if (basicsIcon === 'default') {
      return <BlackCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (basicsIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!basicsIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };
  const WalletConfigurationIcon = () => {
    if (walletConfigurationIcon === 'default') {
      return (
        <BlackCircleIcon
          className='icon-flowConfiguration-defaultsExceptBasics'
          sx={{ width: '15px', height: '15px' }}
        />
      );
    }
    if (walletConfigurationIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!walletConfigurationIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };
  const ConditionsConfigurationIcon = () => {
    if (conditionsConfigurationIcon === 'default') {
      return (
        <BlackCircleIcon
          className='icon-flowConfiguration-defaultsExceptBasics'
          sx={{ width: '15px', height: '15px' }}
        />
      );
    }
    if (conditionsConfigurationIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!conditionsConfigurationIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };
  const ConditionsIcon = () => {
    if (conditionsIcon === 'default') {
      return (
        <BlackCircleIcon
          className='icon-flowConfiguration-defaultsExceptBasics'
          sx={{ width: '15px', height: '15px' }}
        />
      );
    }
    if (conditionsIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!conditionsIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };
  const RegistrationIcon = () => {
    if (registrationIcon === 'default') {
      return (
        <BlackCircleIcon
          className='icon-flowConfiguration-defaultsExceptBasics'
          sx={{ width: '15px', height: '15px' }}
        />
      );
    }
    if (registrationIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!registrationIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };
  const handleBasicsIcon = (e) => {
    setBasicBreakLine(false);

    setRightSide('basics');
    setBasicsIcon(true);

    if (e.detail > 1) {
      setBasicsIcon(false);
    }
  };

  const handleWalletConfigurationIcon = (e) => {
    setWalletConfiguration(false);

    setRightSide('Wallet Configuration');

    setWalletConfigurationIcon(true);

    if (e.detail > 1) {
      setWalletConfigurationIcon(false);
    }
  };
  const handleConditionsConfigurationIcon = (e) => {
    setConditionsConfiguration(false);
    setRightSide('Conditions Configuration');

    setConditionsConfigurationIcon(true);
    if (e.detail > 1) {
      setConditionsConfigurationIcon(false);
    }
  };
  const handleConditionsIcon = (e) => {
    setConditionsBreakLine(false);
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
    <div className='newWrapper-flowConfiguration'>
      <div style={{ minWidth: 300 }} id='mySidebar'>
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
              <BreakLine
                className={
                  basicBreakLine
                    ? 'breakLine-flowConfiguration'
                    : 'breakLine-flowConfiguration breakLine-flowConfiguration-checked '
                }
              />
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
              <BreakLine
                className={
                  WalletConfigurationBreakLine
                    ? 'breakLine-flowConfiguration'
                    : 'breakLine-flowConfiguration breakLine-flowConfiguration-checked'
                }
              />
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
              <BreakLine
                className={
                  ConditionsConfigurationBreakLine
                    ? 'breakLine-flowConfiguration'
                    : 'breakLine-flowConfiguration breakLine-flowConfiguration-checked '
                }
              />
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
              <BreakLine
                className={
                  ConditionsBreakLine
                    ? 'breakLine-flowConfiguration'
                    : 'breakLine-flowConfiguration breakLine-flowConfiguration-checked'
                }
              />
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
      </div>
      <div className='div2-wholeContainer'>
        <RightSideBasics />
      </div>
    </div>
  );
}

export default FlowConfiguration;

import React from 'react';
import Basics from './basicsPage/basics.mini.page';
import WalletConfiguration from './walletConfigurationPage/walletConfiguration.mini.page';
import ConditionsConfiguration from './conditionsConfiguration/conditionsConfiguration.mini.page';
import Conditions from './conditionsPage/conditions.mini.page';
import Registration from './registrationPage/registration.mini.page';

import './flowConfiguration.mini.styles.css';

function FlowConfiguration() {
  return (
    <>
      {/* 1st 
      1-5 parts leftSide */}
      <div>Basics Label</div>
      <div>Dot Label</div>
      <div>Divider Horizontal</div>
      {/* 2nd */}
      <div>Wallet Configuration Label</div>
      <div>Dot Label</div>
      <div>Divider Horizontal</div>
      {/* 3rd */}
      <div>Conditions Configuration Label</div>
      <div>Dot Label</div>
      <div>Divider Horizontal</div>
      {/* 4th */}
      <div>Conditions Label</div>
      <div>Dot Label</div>
      <div>Divider Horizontal</div>
      {/* 5th */}
      <div>Registration Label</div>
      <div>Dot Label</div>
      <div>Divider Horizontal</div>
      {/* 2th right side */}
      {/* 1st */}
      <Basics />
      {/* 2nd */}
      <WalletConfiguration />
      {/* 3rd */}
      <ConditionsConfiguration />
      {/* 4rd */}
      <Conditions />
      {/* 5th */}
      <Registration />
      {/* 3rd */}
      <div>Save button on the right</div>
    </>
  );
}

export default FlowConfiguration;

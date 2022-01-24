import React, { useState } from 'react';
import './walletConfiguration.mini.styles.css';
import Label from '../../../../components/labelComponent/Label.component';
import Dropdown from '../../../../components/dropdownComponent/SpecialDropdown.component';

function WalletConfiguration() {
  const [value, setValue] = useState();
  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {/* 1st */}
      <Label
        label='Wallet Configuration'
        className='main-header-applicationFlow'
      />
      <Label
        label='Set Default Wallet Type and Currency '
        className='main-header-applicationFlow'
      />
      <Label label='Type' className='main-header-applicationFlow' />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Server - MT4'}
      />
      <Label label='Wallet Type' className='main-header-applicationFlow' />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Server - MT4'}
      />
      <Label label='Currency' className='main-header-applicationFlow' />
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

export default WalletConfiguration;

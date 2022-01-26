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

  //  <Label
  //           label='Wallet Configuration'
  //           className='header-walletConfiguration'
  //         />
  //         <Label
  //           label='Set Default Wallet Type and Currency '
  //           className='header-walletConfiguration'
  //         />

  return (
    <div className='parent-walletConfiguration'>
      {/* 1st */}
      <div className='div1-walletConfiguration'>
        <Label label='Type' className='header-walletConfiguration' />
        <Dropdown
          items={menu}
          label={value}
          handleChange={handleChange}
          value={value}
          inputLabel={value ? value : 'Server - MT4'}
          sx={{
            marginLeft: 0.2,
            minWidth: 165,
            borderRadius: 4,
            background: 'linear-gradient(21deg, #10abff, #1beabd)',
          }}
          menuSx={{
            width: 165,
          }}
        />
      </div>

      <div className='div2-walletConfiguration'>
        <Label label='Wallet Type' className='header-walletConfiguration' />
        <Dropdown
          items={menu}
          label={value}
          handleChange={handleChange}
          value={value}
          inputLabel={value ? value : 'Server - MT4'}
          sx={{
            marginLeft: 0.2,
            minWidth: 165,
            borderRadius: 4,
            background: 'linear-gradient(21deg, #10abff, #1beabd)',
          }}
          menuSx={{
            width: 165,
          }}
        />
      </div>
      <div className='div3-walletConfiguration'>
        <Label label='Currency' className='header-walletConfiguration' />
        <Dropdown
          items={menu}
          label={value}
          handleChange={handleChange}
          value={value}
          inputLabel={value ? value : 'Server - MT4'}
          sx={{
            marginLeft: 0.2,
            minWidth: 165,
            borderRadius: 4,
            background: 'linear-gradient(21deg, #10abff, #1beabd)',
          }}
          menuSx={{
            width: 165,
          }}
        />
      </div>
    </div>
  );
}

export default WalletConfiguration;

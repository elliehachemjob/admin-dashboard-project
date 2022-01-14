import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';
import Input from '../../components/inputComponent/Input.component';

function DynamicMargin() {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [activationLogins, setActivationLogins] = useState();

  const handleActivationLoginsChange = (event) => {
    setActivationLogins(event.target.value);
  };

  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const menu2 = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  return (
    <>
      {/* 1st */}
      <Label label='Profiles' size={18.72} />
      <Label label='Server' />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Server - MT4'}
      />
      <Button name='Sync Profiles' />
      {/* 2nd */}
      <Label label='Activation' size={18.72} />
      <Label label='Server' />
      <Dropdown
        items={menu2}
        label={value2}
        handleChange={handleChange2}
        value={value2}
        inputLabel={value2 ? value2 : 'Server - MT4'}
      />
      <Label label='Activation Logins' />
      <Input
        value={activationLogins}
        onChange={handleActivationLoginsChange}
        label='Activation Logins'
      />
      <Button name='Activate' />
    </>
  );
}

export default DynamicMargin;

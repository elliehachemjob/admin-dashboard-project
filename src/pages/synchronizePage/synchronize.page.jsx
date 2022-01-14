import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import ToggleList from '../../components/ListComponents/toggleListComponent/ToggleList.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';

function Synchronize() {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();

  const [label1, setLabel1] = useState([{ id: 1, label: 'Auto Sync' }]);

  const menu = [
    { value: 'Per Hour' },
    { value: 'Per 6 hours' },
    { value: 'Per 12 hours' },
    { value: 'Per Day' },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const menu2 = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const menu3 = [{ value: 'Groups' }, { value: 'Securities' }];

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const menu4 = [{ value: 'Irina Test' }];

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  return (
    <>
      {/* 1st */}
      <Label label='Synchronize Settings' size={18.72} />
      <ToggleList key={label1.id} list={label1} />
      <Label label='Synchronization Time Frame' />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Per Day'}
      />
      <Button name='Save Changes' />
      {/* 2nd */}
      <Label label='Server' />
      <Dropdown
        items={menu2}
        label={value2}
        handleChange={handleChange2}
        value={value2}
        inputLabel={value2 ? value2 : 'Server - MT4'}
      />
      <Label label='Synchronize' />
      <Dropdown
        items={menu3}
        label={value3}
        handleChange={handleChange3}
        value={value3}
        inputLabel={value3 ? value3 : 'Groups'}
      />
      <Button name='Save Changes' />
      {/* 3rd */}
      <Label label='Synchronize Settings' size={18.72} />
      <Label label='Promotions' />
      <Dropdown
        items={menu4}
        label={value4}
        handleChange={handleChange4}
        value={value4}
        inputLabel={value4 ? value4 : 'Irina Test'}
      />
      <Button name='Synchronize' />
    </>
  );
}

export default Synchronize;

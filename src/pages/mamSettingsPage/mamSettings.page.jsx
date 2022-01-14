import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import ToggleList from '../../components/ListComponents/toggleListComponent/ToggleList.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';
import Input from '../../components/inputComponent/Input.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import { BellIcon } from '../../components/iconsComponent/Icons.component';

function MamSettings() {
  const [label, setLabel] = useState([{ id: 1, label: 'Is User Comment' }]);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();
  const [mam, setMam] = useState();
  const [signalComment, setSignalComment] = useState();

  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const menu2 = [{ value: 'Equity' }, { value: 'Balance' }];

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const menu3 = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const menu4 = [{ value: 'Profiles' }, { value: 'Link Trades' }];

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  const handleMamChange = (event) => {
    setMam(event.target.value);
  };
  
  const handleSignalCommentChange = (event) => {
    setSignalComment(event.target.value);
  };

  return (
    <>
      {/* 1st */}
      <Label label='MAM Settings' size={18.72} />
      {/* 2nd */}
      <Label label='server' />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Server - MT4'}
      />
      <ToggleList key={label.id} list={label} />
      <Label label='MAM Comment' />
      <Input value={mam} onChange={handleMamChange} label='MAM' />
      <BellIcon />
      <Label label='Max of 10 Characters' />
      <Label label='Signal Comment' />
      <Input
        value={signalComment}
        onChange={handleSignalCommentChange}
        label='Signal'
      />
      <BellIcon />
      <Label label='Max of 10 Characters' />
      <Button name='Save Changes' />
      {/* 3rd */}
      <Label label='PF Settings' size={18.72} />
      <Label label='PF Calculation Methods' />
      <Dropdown
        items={menu2}
        label={value2}
        handleChange={handleChange2}
        value={value2}
        inputLabel={value2 ? value2 : 'Equity'}
      />
      <Button name='Save Changes' />
      {/* 4th */}
      <Label label='Synchronization' size={18.72} />
      <Label label='Server' />
      <Dropdown
        items={menu3}
        label={value3}
        handleChange={handleChange3}
        value={value3}
        inputLabel={value3 ? value3 : 'Server - MT4'}
      />
      <Label label='Synchronize' />
      <Dropdown
        items={menu4}
        label={value4}
        handleChange={handleChange4}
        value={value4}
        inputLabel={value4 ? value4 : 'Profiles'}
      />
      <Button name='Synchronize' />
    </>
  );
}

export default MamSettings;

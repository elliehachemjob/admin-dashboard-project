import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import ToggleList from '../../components/ListComponents/toggleListComponent/ToggleList.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';

function Synchronize() {
  const [label1, setLabel1] = useState([{ id: 1, label: 'Auto Sync' }]);

  return (
    <>
      {/* 1st */}
      <Label label='Synchronize Settings' size={18.72} />
      <ToggleList key={label1.id} list={label1} />
      <Label label='Synchronization Time Frame' />
      <h6>Auto Sync Label To the right of toggle</h6>
      <h6>Synchronization Time Frame Label</h6>
      <h6>List Item</h6>
      <h6>Save Changes Button</h6>
      {/* 2nd */}
      <h5>Server Label</h5>
      <h6>List Item</h6>
      <h5>Synchronize Label</h5>
      <h6>List Item</h6>
      <h6>Save Changes Button</h6>
      {/* 3rd */}
      <h3>Sync Promotions</h3>
      <h5>Promotions Label</h5>
      <h6>List Item</h6>
      <h6>Synchronize Button</h6>
    </>
  );
}

export default Synchronize;

import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';
import DatePicker from '../../components/datePickerComponent/DatePicker.component';

function IbSettings() {
  const [accLinkType, setAccLinkType] = useState([{ label: 'IDNumber' }]);
  const [ibList, setIbList] = useState([
    { label: 'IB - 1000' },
    { label: 'IB - 1001' },
  ]);

  const [rows, setRows] = useState([
    {
      id: 1,
      accLinkType: 'IDNumber',
      autoLink: true,
      sererName: 'Server - MT4',
    },
    {
      id: 2,
      accLinkType: 'IDNumber',
      autoLink: true,
      sererName: 'Demo - MT5',
    },
  ]);
  const [columns, setColumns] = useState([
    { field: 'accLinkType', headerName: 'Acc Link Type', width: 90 },
    {
      field: 'autoLink',
      headerName: 'Auto Link',
      width: 150,
      editable: true,
    },
    {
      field: 'sererName',
      headerName: 'Server Name',
      width: 150,
      editable: true,
    },
  ]);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();

  const menu = [{ value: 'Trades' }, { value: 'Breakdown report' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const menu2 = [{ value: 'IB - 1000' }, { value: 'IB - 1001' }];

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  return (
    <>
      {/* 1st */}
      <Label label='IB Settings' size={18.72} />
      {/* 2nd */}
      <Button name='Edit' />
      <SearchInput options={accLinkType} label='Filter By Type ' />
      {/* 3rd */}
      <Table rows={rows} columns={columns} pageSize={7} />
      {/* 4th */}
      <Label label='Synchronize' />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Trades'}
      />
      <Label label='IB' />
      <Dropdown
        items={menu2}
        label={value2}
        handleChange={handleChange2}
        value={value2}
        inputLabel={value2 ? value2 : 'IB - 1000'}
      />
      <Label label='Date Range' />
      <DatePicker />
      <Button name='Synchronize' />
      {/* 5th */}
      <Label label='IB Registration Link' />
      <SearchInput options={ibList} label='ref ' />

      <Button name='Update Link' />
    </>
  );
}

export default IbSettings;

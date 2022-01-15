import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import './webhooks.Styles.css';

function WebHooks() {
  const [hooksNames, setHooksName] = useState([
    { label: 'UseLocalStorage' },
    { label: 'UseToggle' },
  ]);
  const [rows, setRows] = useState([
    { id: 0, type: 'Any', name: 'useLocalStorage', target: 'Hook' },
    { id: 1, type: 'Any', name: 'useToggle', target: 'Hook' },
  ]);
  const [columns, setColumns] = useState([
    { field: 'type', headerName: 'Type', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'target',
      headerName: 'Target',
      width: 150,
      editable: true,
    },
  ]);

  return (
    <>
      {/* 1st */}
      <Label label='Web Hooks' size={18.72} />
      {/* 2nd */}
      <div class='parent-webHooks'>
        <div class='div1-webHooks'>
          <div className='buttons-wrapper'>
            <div className='button-wrapper'>
              <Button className='button' name='Add' />
            </div>
            <div className='button-wrapper'>
              <Button className='button' name='Edit' />
            </div>
            <div className='button-wrapper'>
              <Button className='button' name='Remove' />
            </div>
          </div>
        </div>
        <div class='div2-webHooks'>
          <SearchInput
            options={hooksNames}
            label='Filter By Hook Integration'
          />
        </div>
      </div>

      {/* 3rd */}
      <Table rows={rows} columns={columns} pageSize={7} />
    </>
  );
}

export default WebHooks;

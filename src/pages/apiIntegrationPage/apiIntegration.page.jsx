import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';

function ApiIntegration() {
  const [integrationName, setIntegrationName] = useState([
    { label: 'Twilio' },
    { label: 'sumsub' },
  ]);

  const [rows, setRows] = useState([
    {
      id: 1,
      integrationName: 'sumsub',
      type: 'Sumsub',
      enabled: 'Enabled',
    },
    {
      id: 2,
      integrationName: 'Twilio',
      type: 'Twilio',
      enabled: 'Enabled',
    },
  ]);
  const [columns, setColumns] = useState([
    { field: 'integrationName', headerName: 'Integration Name', width: 90 },
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
      editable: true,
    },
    {
      field: 'enabled',
      headerName: 'Enable',
      width: 150,
      editable: true,
    },
  ]);

  return (
    <>
      {/* 1st */}
      <Label label='API Integration' size={18.72} />

      {/* 2nd */}
      <Button name='Add' />
      <Button name='Edit' />
      <Button name='Remove' />
      <SearchInput
        options={integrationName}
        label='Filter By API Integration'
      />
      <Table rows={rows} columns={columns} pageSize={7} />
    </>
  );
}

export default ApiIntegration;

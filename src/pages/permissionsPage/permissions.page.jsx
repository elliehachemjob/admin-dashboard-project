import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  AddItemIcon,
  EditItemIcon,
  DeleteItemIcon,
} from '../../components/iconsComponent/Icons.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';

function Permissions() {
  const [tab, setTab] = useState(true);

  const [rolesList, setRoleList] = useState([
    { label: 'Admin Role' },
    { label: 'Test' },
  ]);

  const date = new Date().toString();

  const [rolesRow, setRolesRow] = useState([
    {
      id: 1,
      name: 'Admin Role',
      description: 'Administrator Role',
      creationDate: date,
    },
    {
      id: 2,
      name: 'Test',
      description: 'Test Role',
      creationDate: date,
    },
  ]);
  const [rolesColumns, setRolesColumns] = useState([
    { field: 'name', headerName: 'Name', width: 250 },
    {
      field: 'description',
      headerName: 'Description',
      width: 250,
      editable: true,
    },
    {
      field: 'creationDate',
      headerName: 'Creation Date',
      width: 250,
      editable: true,
    },
  ]);
  const [userRow, setUserRow] = useState([
    {
      id: 1,
      fullName: 'Michael',
      email: 'Michael@gmail.com',
      creationDate: date,
    },
    {
      id: 2,
      fullName: 'Paulo',
      email: 'Paulo@gmail.com',
      creationDate: date,
    },
  ]);

  const [usersColumns, setUsersColumns] = useState([
    { field: 'fullName', headerName: 'Full Name', width: 250 },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
    },
    {
      field: 'creationDate',
      headerName: 'Creation Date',
      width: 250,
      editable: true,
    },
  ]);

  const handleTabChange = () => {
    setTab(!tab);
  };

  return (
    <>
      {/* 1st */}
      <Label label='Permissions' size={18.72} />
      {/* 2nd */}
      <Label onClick={handleTabChange} label='Roles' />
      <Label onClick={handleTabChange} label='Users' />
      {/* 3rd */}

      {/* 4th */}
      {tab ? (
        <>
          <Button name='Add' />
          <Button name='Edit' />
          <Button name='Remove' />
          <AddItemIcon />
          <EditItemIcon />
          <DeleteItemIcon />
          <SearchInput options={rolesList} label='Filter By Roles' />
          <Table rows={userRow} columns={usersColumns} pageSize={7} />
        </>
      ) : (
        <>
          <SearchInput options={rolesList} label='Filter By Users' />
          <Table rows={rolesRow} columns={rolesColumns} pageSize={7} />
        </>
      )}
    </>
  );
}

export default Permissions;

import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  AddItemIcon,
  DeleteItemIcon,
  StatusIcon,
} from '../../components/iconsComponent/Icons.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';

function Users() {
  const [tab, setTab] = useState(true);
  const [usersList, setUsersList] = useState([
    { label: 'Yulia Lea' },
    { label: 'Zack Gao' },
  ]);

  const [teamsList, setTeamList] = useState([
    { label: 'Default Team' },
    { label: 'Test Team' },
  ]);
  const date = new Date().toString();

  const [teamsRow, setTeamsRow] = useState([
    {
      id: 1,
      name: 'Team One',
      description: 'Team One Description',
      members: 2,
    },
    {
      id: 2,
      name: 'Team Two',
      description: 'Team Two Description',
      members: 4,
    },
  ]);
  const [teamsColumns, setTeamsColumns] = useState([
    { field: 'name', headerName: 'Name', width: 250 },
    {
      field: 'description',
      headerName: 'Description',
      width: 250,
      editable: true,
    },
    {
      field: 'members',
      headerName: 'Members',
      width: 250,
      editable: true,
    },
  ]);

  const [usersRow, setUsersRow] = useState([
    {
      id: 1,
      fullName: 'Zack Gao',
      status: true,
      email: 'zack@gmail.com',
      team: 'team',
      creationDate: date,
      access: 'Allowed',
    },
    {
      id: 2,
      fullName: 'Yulia',
      status: false,
      email: 'yulia@gmail.com',
      team: 'team',
      creationDate: date,
      access: 'Denied',
    },
  ]);

  const [usersColumns, setUsersColumns] = useState([
    { field: 'fullName', headerName: 'Full Name', width: 250 },
    { field: 'status', headerName: 'Status', width: 250 },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
    },
    { field: 'team', headerName: 'Team', width: 250 },
    {
      field: 'creationDate',
      headerName: 'Creation Date',
      width: 250,
      editable: true,
    },
    {
      field: 'access',
      headerName: 'Access',
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
      <Label label='Users' size={18.72} />
      {/* 2nd */}
      <Label onClick={handleTabChange} label='Users' />
      <Label onClick={handleTabChange} label='Teams' />

      {/* 3rd */}
      <Button name='Add' />
      <Button name='Remove' />
      <AddItemIcon />
      <DeleteItemIcon />
      {/* 4th */}

      {tab ? (
        <>
          <SearchInput options={usersList} label='Filter By Users' />
          <Table rows={usersRow} columns={usersColumns} pageSize={7} />
        </>
      ) : (
        <>
          <SearchInput options={teamsList} label='Filter By Teams' />
          <Table rows={teamsRow} columns={teamsColumns} pageSize={7} />
        </>
      )}
    </>
  );
}

export default Users;

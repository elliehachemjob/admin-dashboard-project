import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import './questionnaire.style.css';

function Questionnaire() {
  const [questionnaire, setQuestionnaire] = useState([
    { label: 'Random Question toe be asked' },
    { label: 'New Question here' },
  ]);

  const [rows, setRows] = useState([
    {
      id: 1,
      questionName: 'Random Question to be asked',
      questionType: 'TextBox',
    },
    {
      id: 2,
      questionName: 'New Question here',
      questionType: 'TextBox',
    },
  ]);
  const [columns, setColumns] = useState([
    { field: 'questionName', headerName: 'Question Name', width: 250 },
    {
      field: 'questionType',
      headerName: 'Question Type',
      width: 250,
      editable: true,
    },
  ]);

  return (
    <>
      {/* 1st */}
      <Label label='Questionnaire' />
      {/* 2nd */}
      <div className='buttons-wrapper-questionnaire'>
        <div className='button-wrapper-questionnaire'>
          <Button className='button-questionnaire' name='Add' />
        </div>
        <div className='button-wrapper-questionnaire'>
          <Button className='button-questionnaire' name='Edit' />
        </div>
        <div className='button-wrapper-questionnaire'>
          <Button className='button-questionnaire' name='Remove' />
        </div>
        <div>
          <SearchInput options={questionnaire} label='Filter by Question' />
        </div>
      </div>

      {/* 3rd */}
      <Table rows={rows} columns={columns} pageSize={7} />
    </>
  );
}

export default Questionnaire;

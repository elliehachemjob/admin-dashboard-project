import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import './questionnaire.style.css';
import { useMediaQuerySize } from '../../hooks/hooks';

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

  let mediumScreen = useMediaQuerySize('(max-width:755px)');
  let smallScreen = useMediaQuerySize('(max-width:500px)');

  const screenSizes = () => {
    if (smallScreen) {
      return 80;
    }
    if (mediumScreen) {
      return 150;
    } else {
      return 300;
    }
  };

  return (
    <>
      {/* 1st */}
      <Label label='Questionnaire' className='header-Questionnaire' />
      {/* 2nd */}
      <div className='parent-Questionnaire'>
        <div className='div1-buttons-Questionnaire'>
          <div className='button-list-Questionnaire'>
            <div className='button-wrapper-Questionnaire'>
              <Button className='button-Questionnaire' name='Add' />
            </div>
            <div className='button-wrapper-Questionnaire'>
              <Button className='button-Questionnaire' name='Edit' />
            </div>
            <div className='button-wrapper-Questionnaire'>
              <Button className='button-Questionnaire' name='Remove' />
            </div>
          </div>
        </div>
        <div className='div2-searchInput-Questionnaire'>
          <SearchInput
            options={questionnaire}
            label='Filter by Question'
            className='searchInput-Questionnaire'
            sx={{ width: screenSizes }}
            
          />
        </div>
      </div>

      {/* 3rd */}
      <Table
        rows={rows}
        columns={columns}
        pageSize={7}
        className='table-Questionnaire'
        
      />
    </>
  );
}

export default Questionnaire;

import React, { useState } from 'react';
import Label from '../../../components/labelComponent/Label.component';
import Input from '../../../components/inputComponent/Input.component';
import BreakLine from '../../../components/breakLineComponent/BreakLine.component';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import CheckBox from '../../../components/checkboxComponent/CheckBox.component';
import RadioButtonList from '../../../components/ListComponents/radioButtonListComponent/RadioButtonList.component';
import SearchInput from '../../../components/searchInputComponent/SearchInput.component';

import { makeStyles } from '@material-ui/core/styles';

import './applicationFlowFill.styles.css';

function ApplicationFlowFill() {
  const useStyles = makeStyles((theme) => ({
    textField: {
      width: '40vw',
      height: '5vh',
      color: 'black',
      backgroundColor: 'rgb(234,235,237)',
    },
  }));
  const classes = useStyles();

  const countriesAndTerritoriesList = [
    {
      id: 1,
      value: 'Included',
      label: 'Included',
    },
    {
      id: 2,
      value: 'Excluded',
      label: 'Excluded',
    },
  ];

  const [countryList, setCountryList] = useState([
    { label: 'Lebanon' },
    { label: 'Cyprus' },
    { label: 'USA' },
  ]);

  const [optionsList, setOptionsList] = useState([
    { label: 'option1' },
    { label: 'option2' },
    { label: 'option3' },
  ]);

  return (
    <div className='mainWrapper-ApplicationFlowFill'>
      {/* 1st */}
      <div className='container1-ApplicationFlowFill'>
        <Label label='Level Name' className='header-ApplicationFlowFill' />
        <Input name='basic-kyc-level' textFieldStyles={classes.textField} />
        <Label
          label='Note that once you create a level,you will not be able to change its name/.'
          className='label-ApplicationFlowFill'
        />
      </div>
      {/* 2nd */}
      <div className='container2-ApplicationFlowFill'>
        <Label label='Required Steps' className='header-ApplicationFlowFill' />
        <BreakLine />
        <Label
          label='here you should set up the steps that are required
          from your customers to complete the verification process'
          className='label-ApplicationFlowFill'
        />
        <Label
          label={`Please note that the order of these steps is
          important, as it defines your customer's journey  `}
          className='label-ApplicationFlowFill'
        />
        {/* 3rd */}
        <div>steps information Filling component</div>
        {/* 4th */}
        <Label
          label='Countries and Territories'
          className='header-ApplicationFlowFill'
        />
        <RadioButtonList list={countriesAndTerritoriesList} />
        <SearchInput
          options={countryList}
          label='Select included countries'
          sx={{ width: 300, margin: 2 }}
        />
        <Label
          label={`Here you may specify the countries that this
          applicant level supports.leave this field empty if there is no
          restrictions `}
          className='label-ApplicationFlowFill'
        />
        <Label label='Source Key' className='header-ApplicationFlowFill' />
        <SearchInput
          options={optionsList}
          label='Select option'
          sx={{ width: 300, margin: 2 }}
        />
        <CheckBox />
        <Label
          label='Email Notifications'
          className='checkboxLabel-ApplicationFlowFill'
        />
        <CheckBox />
        <Label
          label='Use Custom ID documents Settings'
          className='checkboxLabel-ApplicationFlowFill'
        />
        {/* 5th */}
        <Button name='Add New Flow' />
        <Button name='Save' />
      </div>
    </div>
  );
}

export default ApplicationFlowFill;

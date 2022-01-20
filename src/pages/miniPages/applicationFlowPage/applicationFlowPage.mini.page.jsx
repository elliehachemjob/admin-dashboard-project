import React, { useState } from 'react';
import './applicationFlowPage.mini.styles.css';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../../components/labelComponent/Label.component';
import Dropdown from '../../../components/dropdownComponent/SpecialDropdown.component';
import ExpandableAccordion from '../../../components/expandableAccordionComponent/ExpandableAccordion.component';
import DropdownTagSelector from '../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';
import Input from '../../../components/inputComponent/Input.component';
import AddFields from '../../../components/fieldsAddComponent/FieldsAdd.component';

function ApplicationFlowPage() {
  const [value, setValue] = useState();
  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {/* 1st */}
      <Button
        className='button-fieldsAdd'
        name='Customize Flow'
        variant='contained'
        sx={{
          backgroundColor: '#11468F',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#11468F50',
            borderRadius: '20px',
          },
        }}
      />
      <Button
        className='button-fieldsAdd'
        name='Secondary Flow'
        variant='contained'
        sx={{
          backgroundColor: '#11468F',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#11468F50',
            borderRadius: '20px',
          },
        }}
      />
      {/* 2nd */}
      <Label className='label-notificationPage' label='Primary' />
      {/* 3nd */}
      <Button
        className='button-fieldsAdd'
        name='Add Step'
        variant='contained'
        sx={{
          backgroundColor: '#11468F',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#11468F50',
            borderRadius: '20px',
          },
        }}
      />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Server - MT4'}
        sx={{ m: 0, minWidth: 160 }}
      />
      {/* 4th */}
      {/* <div>Modal</div> */}
      {/* 5th */}
      <ExpandableAccordion
        section1='SMS Verification'
        section2={
          <Dropdown
            items={menu}
            label={value}
            handleChange={handleChange}
            value={value}
            inputLabel={value ? value : 'Server - MT4'}
            sx={{ m: 0, minWidth: 160 }}
          />
        }
      />
      {/* 6th */}
      <ExpandableAccordion
        section1='E-mail Verification'
        section2={
          <Dropdown
            items={menu}
            label={value}
            handleChange={handleChange}
            value={value}
            inputLabel={value ? value : 'Server - MT4'}
            sx={{ m: 0, minWidth: 160 }}
          />
        }
      />
      {/* 7th */}
      <ExpandableAccordion
        section1='Selfie Verification'
        section2={
          <>
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Server - MT4'}
              sx={{ m: 0, minWidth: 160 }}
            />
            <Input label='Activation Logins' style={{ margin: 2 }} />
          </>
        }
      />
      {/* 8th */}
      <ExpandableAccordion
        section1='Create Account'
        section2={<AddFields items={menu} label={value} value={value} />}
      />
      {/* 9th */}
      <ExpandableAccordion
        section1='Questionnaire'
        section2={<AddFields items={menu} label={value} value={value} />}
      />
      {/* 10 */}
      <ExpandableAccordion
        section1='Address Verification'
        section2={
          <>
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Server - MT4'}
              sx={{ m: 0, minWidth: 160 }}
            />
            <Input label='Activation Logins' style={{ margin: 2 }} />
            <AddFields items={menu} label={value} value={value} />
          </>
        }
      />
      {/* 11 */}
      <ExpandableAccordion section1='Deposit Money' section2='' />
      {/* 12 */}
      <ExpandableAccordion
        section1='Applicant Data'
        section2={
          <>
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Server - MT4'}
              sx={{ m: 0, minWidth: 160 }}
            />
            <Input label='Activation Logins' style={{ margin: 2 }} />
            <AddFields items={menu} label={value} value={value} />
          </>
        }
      />
      {/* 13 */}
      <ExpandableAccordion
        section1='Upload Documents'
        section2={
          <>
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Server - MT4'}
              sx={{ m: 0, minWidth: 160 }}
            />
            <Input label='Activation Logins' style={{ margin: 2 }} />
            <DropdownTagSelector />
          </>
        }
      />
      {/* 14th */}
      <Button
        className='button-fieldsAdd'
        name='Save'
        variant='contained'
        sx={{
          backgroundColor: '#11468F',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#11468F50',
            borderRadius: '20px',
          },
        }}
      />
    </>
  );
}

export default ApplicationFlowPage;

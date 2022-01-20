import React, { useState } from 'react';
import './applicationFlowPage.mini.styles.css';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../../components/labelComponent/Label.component';
import Dropdown from '../../../components/dropdownComponent/SpecialDropdown.component';
import ExpandableAccordion from '../../../components/expandableAccordionComponent/ExpandableAccordion.component';
import DropdownTagSelector from '../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';
import Input from '../../../components/inputComponent/Input.component';
import AddFields from '../../../components/fieldsAddComponent/FieldsAdd.component';
import './applicationFlowPage.mini.page';
import ScrollableTab from '../../../components/scrollableTabComponent/ScrollableTab.component';
import MenuList from '../../../components/menuListComponent/MenuList.component';
import { CancellationIcon } from '../../../components/iconsComponent/Icons.component';

function ApplicationFlowPage() {
  const [value, setValue] = useState();
  const [tabValue, setTabValue] = useState(0);

  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [tabList, setTabList] = useState([
    { id: 1, label: <div>Primary</div> },
  ]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    console.log('hey');
  };

  const cancelClick = (id) => {
    setTabList((tabValue) => {
      return tabValue.filter((item) => {
        return item.id !== 4;
      });
    });
  };

  const handleSecondaryFlow = () => {
    setTabValue((tabValue) => tabValue + 1);

    setTabList([
      ...tabList,
      {
        id: 4,
        label: (
          <div>
            Secondary
            <CancellationIcon
              className='cancellationIcon-applicationFlowPage'
              onClick={cancelClick}
            />
          </div>
        ),
      },
    ]);
    console.log(tabList);
  };

  const menuItemsList = [
    { id: 1, label: 'IB' },
    { id: 2, label: 'Trader' },
  ];

  return (
    <>
      <div className='parent-applicationFlow'>
        <div className='div1-applicationFlow'>
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
        </div>
        <div className='div2-applicationFlow'>
          <Button
            onClick={handleSecondaryFlow}
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
        </div>
        <div className='div3-applicationFlow'>
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
        </div>
        <div className='div4-applicationFlow'>
          <MenuList
            name='Server'
            sx={{
              backgroundColor: '#11468F',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#11468F50',
                borderRadius: '20px',
              },
            }}
            menuItemsList={menuItemsList}
          />
        </div>
      </div>
      <ScrollableTab
        tabList={tabList}
        handleChange={handleTabChange}
        value={tabValue}
      />
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
            <Input
              label='Activation Logins'
              style={{ marginTop: 2, marginBottom: 2 }}
            />
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
            <Input
              label='Activation Logins'
              style={{ marginTop: 2, marginBottom: 2 }}
            />
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
            <Input
              label='Activation Logins'
              style={{ marginTop: 2, marginBottom: 2 }}
            />
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
            <Input
             
              
           
              label='Activation Logins'
              style={{ marginTop: 2, marginBottom: 2 }}
            />
            <DropdownTagSelector  />
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

import React, { useState } from 'react';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../../components/labelComponent/Label.component';
import Dropdown from '../../../components/dropdownComponent/SpecialDropdown.component';
import ExpandableAccordion from '../../../components/expandableAccordionComponent/ExpandableAccordion.component';
import DropdownTagSelector from '../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';
import Input from '../../../components/inputComponent/Input.component';
import AddFields from '../../../components/fieldsAddComponent/FieldsAdd.component';
import './applicationFlow.mini.page';
import ScrollableTab from '../../../components/scrollableTabComponent/ScrollableTab.component';
import MenuList from '../../../components/menuListComponent/MenuList.component';
import {
  CancelCircleIcon,
  DeleteItemIcon,
} from '../../../components/iconsComponent/Icons.component';
import FlowStepsModal from './flowStepsModalPage/flowStepsModal.mini.page';
import FlowListModal from './flowListModalPage/flowListModal.mini.page';
import ServerChooseModal from './serverChooseModalPage/serverChooseModal.mini.page';
import { makeStyles } from '@material-ui/core/styles';
import CheckBox from '../../../components/checkboxComponent/CheckBox.component';
import SearchInput from '../../../components/searchInputComponent/SearchInput.component';

import './applicationFlow.mini.styles.css';

function ApplicationFlowPage() {
  const useStyles = makeStyles((theme) => ({
    textField: {
      border: '',
      backgroundColor: '',
      borderRadius: '15px',
      background: 'linear-gradient(21deg, #10abff, #1beabd)',
      opacity: 1,
      '&:hover,&:focus': {
        border: ' ',
        backgroundColor: '',
        opacity: 1,
      },
    },
  }));

  const [searchList, setSearchList] = useState([
    { label: 'none' },
    { label: 'Applicant Data' },
    { label: 'Default Account Conditions' },
    { label: 'Identity Verification' },
    { label: 'Address Verification' },
    { label: 'Complete your profile' },
    { label: 'Submit & Review' },
  ]);
  const classes = useStyles();

  const [flowName, setFlowName] = useState('USA Registration Flow');

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
            <CancelCircleIcon
              className='cancelCircleIcon-applicationFlowPage'
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
  const HandleAddStep = () => {
    alert('clicked');
  };

  return (
    <>
      <Label
        label={flowName}
        className='main-header-applicationFlow'
        size={18.72}
      />
      <div className='parent-applicationFlow'>
        <div className='div1-applicationFlow'>
          {/* 1st */}
          <FlowListModal flowName={flowName} setFlowName={setFlowName} />
        </div>
        <div className='div2-applicationFlow'>
          {/* 2nd */}
          <FlowStepsModal />
        </div>
        <div className='div3-applicationFlow'>
          {/* 3rd */}
          <ServerChooseModal />
        </div>
      </div>
      {/* 4th */}
      <ExpandableAccordion
        section1={
          <Label label='Applicant Data' className='label-applicationFlow' />
        }
        section2={
          <>
            <div className='sectionsWrapper-applicationFlow'>
              <Dropdown
                items={menu}
                label={value}
                handleChange={handleChange}
                value={value}
                inputLabel={value ? value : 'Server - MT4'}
                sx={{
                  marginLeft: 0.2,
                  minWidth: 165,
                  borderRadius: 4,
                  background: 'linear-gradient(21deg, #10abff, #1beabd)',
                }}
                menuSx={{
                  width: 165,
                }}
              />
              <Input
                label='Activation Logins'
                style={{ marginLeft: 2, width: 165 }}
                textFieldStyles={classes.textField}
              />
            </div>

            <AddFields
              sx={{
                backgroundColor: '#04724D',
                borderRadius: '10px',
                fontWeight: 600,

                '&:hover': {
                  backgroundColor: '#5E807F',
                  borderRadius: '10px',
                },
              }}
              sx2={{
                backgroundColor: '#04724D',
                borderRadius: '10px',
                fontWeight: 600,
                marginTop: 2.5,
                '&:hover': {
                  backgroundColor: '#5E807F',
                  borderRadius: '10px',
                },
              }}
              items={menu}
              label={value}
              value={value}
            />
          </>
        }
      />
      {/* 5th */}
      <ExpandableAccordion
        section1={
          <Label
            label='SMS Verification Data'
            className='label-applicationFlow'
          />
        }
        section2={
          <Dropdown
            items={menu}
            label={value}
            handleChange={handleChange}
            value={value}
            inputLabel={value ? value : 'Server - MT4'}
            sx={{
              marginLeft: 0.2,
              minWidth: 165,
              borderRadius: 4,
              background: 'linear-gradient(21deg, #10abff, #1beabd)',
            }}
            menuSx={{
              width: 165,
            }}
          />
        }
      />
      {/* 6th */}
      <ExpandableAccordion
        section1={
          <Label
            label='E-mail Verification'
            className='label-applicationFlow'
          />
        }
        section2={
          <Dropdown
            items={menu}
            label={value}
            handleChange={handleChange}
            value={value}
            inputLabel={value ? value : 'Server - MT4'}
            sx={{
              marginLeft: 0.2,
              minWidth: 165,
              borderRadius: 4,
              background: 'linear-gradient(21deg, #10abff, #1beabd)',
            }}
            menuSx={{
              width: 165,
            }}
          />
        }
      />
      {/* 7th */}
      <ExpandableAccordion
        section1={
          <Label
            label='Selfie Verification'
            className='label-applicationFlow'
          />
        }
        section2={
          <div className='sectionsWrapper-noAddFields-applicationFlow'>
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Server - MT4'}
              sx={{
                marginLeft: 0.2,
                minWidth: 165,
                borderRadius: 4,
                background: 'linear-gradient(21deg, #10abff, #1beabd)',
              }}
              menuSx={{
                width: 165,
              }}
            />
            <Input
              label='Activation Logins'
              style={{ marginLeft: 2, width: 165 }}
              textFieldStyles={classes.textField}
            />
          </div>
        }
      />
      {/* 8th */}
      <ExpandableAccordion
        section1={
          <Label
            label='Address Verification'
            className='label-applicationFlow'
          />
        }
        section2={
          <>
            <div className='sectionsWrapper-applicationFlow'>
              <Dropdown
                items={menu}
                label={value}
                handleChange={handleChange}
                value={value}
                inputLabel={value ? value : 'Server - MT4'}
                sx={{
                  marginLeft: 0.2,
                  minWidth: 165,
                  borderRadius: 4,
                  background: 'linear-gradient(21deg, #10abff, #1beabd)',
                }}
                menuSx={{
                  width: 165,
                }}
              />
              <Input
                label='Activation Logins'
                style={{ marginLeft: 2, width: 165 }}
                textFieldStyles={classes.textField}
              />
            </div>

            <AddFields
              sx={{
                backgroundColor: '#04724D',
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#5E807F',
                  borderRadius: '10px',
                },
              }}
              sx2={{
                backgroundColor: '#04724D',
                borderRadius: '10px',
                fontWeight: 600,
                marginTop: 2.5,
                '&:hover': {
                  backgroundColor: '#5E807F',
                  borderRadius: '10px',
                },
              }}
              items={menu}
              label={value}
              value={value}
            />
          </>
        }
      />
      {/* 9th */}
      <ExpandableAccordion
        section1={
          <Label label='Upload Documents' className='label-applicationFlow' />
        }
        section2={
          <div className='sectionsWrapper-noAddFields-applicationFlow '>
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Server - MT4'}
              sx={{
                marginLeft: 0.2,
                minWidth: 165,
                borderRadius: 4,
                background: 'linear-gradient(21deg, #10abff, #1beabd)',
              }}
              menuSx={{
                width: 165,
              }}
            />
            <Input
              label='Activation Logins'
              style={{ marginLeft: 2, width: 165 }}
              textFieldStyles={classes.textField}
            />
            <DropdownTagSelector
              sx={{
                width: 165,
                marginLeft: 2,
              }}
              widthTagSelectorOpened={165}
            />
          </div>
        }
      />
      {/* 10th */}
      <ExpandableAccordion
        section1={
          <Label label='Questionnaire' className='label-applicationFlow' />
        }
        section2={
          <AddFields
            sx={{
              backgroundColor: '#04724D',
              borderRadius: '10px',
              fontWeight: 600,

              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
            sx2={{
              backgroundColor: '#04724D',
              borderRadius: '10px',
              fontWeight: 600,
              marginTop: 2.5,
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
            items={menu}
            label={value}
            value={value}
            field1='FieldName'
            field2='IsRequired'
            field3='Remove '
            field4='Type'
            field5='Add Field'
            testComponent1={
              <SearchInput
                options={searchList}
                label={<Label label='Applicant Data' size={15} />}
                className='searchInput-emailTemplate'
                sx={{ marginLeft: 1, width: 190 }}
                textFieldStyles={classes.textField}
              />
            }
            testComponent2={<CheckBox />}
            testComponent3={<DeleteItemIcon />}
            testComponent4={<Label label='Type' className='' />}
          />
        }
      />
      {/* 11th */}
      <ExpandableAccordion
        section1={
          <Label label='Create Account' className='label-applicationFlow' />
        }
        section2={
          <AddFields
            sx={{
              backgroundColor: '#04724D',
              borderRadius: '10px',
              fontWeight: 600,

              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
            sx2={{
              backgroundColor: '#04724D',
              borderRadius: '10px',
              fontWeight: 600,
              marginTop: 2.5,
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
            items={menu}
            label={value}
            value={value}
          />
        }
      />
      {/* 12th */}
      <ExpandableAccordion
        section1={
          <Label label='Deposit Money ' className='label-applicationFlow' />
        }
        section2=''
      />
      <div className='parent-saveButton-applicationFlow'>
        <div className='div1-saveButton-applicationFlow'>
          <Button
            className='button-fieldsAdd'
            name={
              <div className='wrapper-addIcon-applicationFlow'>
                <Label
                  label='Save '
                  className='label-addIcon-applicationFlow'
                />
              </div>
            }
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
          />
        </div>
      </div>
      {/* 13th */}
    </>
  );
}

export default ApplicationFlowPage;

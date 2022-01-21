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
import { CancellationIcon } from '../../../components/iconsComponent/Icons.component';
import FlowStepsModal from './flowStepsModalPage/flowStepsModal.mini.page';
import FlowListModal from './flowListModalPage/flowListModal.mini.page';
import ServerChooseModal from './serverChooseModalPage/serverChooseModal.mini.page';
import { makeStyles } from '@material-ui/core/styles';

import './applicationFlow.mini.styles.css';

function ApplicationFlowPage() {
  const useStyles = makeStyles((theme) => ({
    textField: {
      border: '1px solid #94b3fd20',
      backgroundColor: '#2B3A6720',
      minWidth: 189.3,
      borderRadius: '10px',
      opacity: 0.5,

      '&:hover,&:focus': {
        border: '2px solid #94b3fd20',
        backgroundColor: '#FDF0D520',
        opacity: 0.6,
      },
      button: {
        backgroundColor: '#11468F',
        borderRadius: '20px',
        '&:hover': {
          backgroundColor: '#11468F50',
          borderRadius: '20px',
        },
      },
      dropdown: {
        border: '2px solid #94b3fd20',
        backgroundColor: '#94b3fd15',
        minWidth: 189.3,
        borderRadius: '10px',
        opacity: 0.3,
        '&:hover,&:focus': {
          border: '2px solid #94b3fd20',
          backgroundColor: '#94b3fd20',
          opacity: 0.3,
        },
      },
    },
  }));

  const classes = useStyles();

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
  const HandleAddStep = () => {
    alert('clicked');
  };

  return (
    <>
      <div className='parent-applicationFlow'>
        <div className='div1-applicationFlow'>
          {/* 1st */}
          <FlowListModal />
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
        section1='Applicant Data'
        section2={
          <>
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Server - MT4'}
            />
            <Input
              label='Activation Logins'
              style={{ marginTop: 2, marginBottom: 2 }}
              textFieldStyles={classes.textField}
            />
            <AddFields
              sx={{
                backgroundColor: '#2B3A67',
                borderRadius: '10px',
                fontWeight: 600,

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
        section1='SMS Verification'
        section2={
          <Dropdown
            items={menu}
            label={value}
            handleChange={handleChange}
            value={value}
            inputLabel={value ? value : 'Server - MT4'}
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
            />
            <Input
              label='Activation Logins'
              style={{ marginTop: 2, marginBottom: 2 }}
              textFieldStyles={classes.textField}
            />
          </>
        }
      />
      {/* 8th */}
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
            />
            <Input
              label='Activation Logins'
              style={{ marginTop: 2, marginBottom: 2 }}
              textFieldStyles={classes.textField}
            />
            <AddFields
              sx={{
                backgroundColor: '#2B3A67',
                borderRadius: '10px',
                fontWeight: 600,
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
        section1='Upload Documents'
        section2={
          <>
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Server - MT4'}
            />
            <Input
              label='Activation Logins'
              style={{ marginTop: 2, marginBottom: 2 }}
              textFieldStyles={classes.textField}
            />
            <DropdownTagSelector />
          </>
        }
      />
      {/* 10th */}
      <ExpandableAccordion
        section1='Questionnaire'
        section2={
          <AddFields
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,

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
      {/* 11th */}
      <ExpandableAccordion
        section1='Create Account'
        section2={
          <AddFields
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,

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
      <ExpandableAccordion section1='Deposit Money' section2='' />
      {/* 13th */}
      <Button
        className='button-fieldsAdd'
        name='Save'
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
    </>
  );
}

export default ApplicationFlowPage;

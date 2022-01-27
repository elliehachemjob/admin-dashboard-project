import React, { useState } from 'react';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../../components/labelComponent/Label.component';
import Dropdown from '../../../components/dropdownComponent/SpecialDropdown.component';
import ExpandableAccordion from '../../../components/expandableAccordionComponent/ExpandableAccordion.component';
import DropdownTagSelector from '../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';
import Input from '../../../components/inputComponent/Input.component';
import AddFields from '../../../components/fieldsAddComponent/FieldsAdd.component';
import './applicationFlow.mini.page';
import { DeleteItemIcon } from '../../../components/iconsComponent/Icons.component';
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

  const [value, setValue] = useState('');
  const [smsVerificationValue, setSmsVerificationValue] = useState('');
  const [emailVerificationValue, setEmailVerificationValue] = useState('');
  const [selfieVerificationValue, setSelfieVerificationValue] = useState('');
  const [addressVerificationValue, setAddressVerificationValue] = useState('');
  const [applicantDataValue, setApplicantDataValue] = useState('');
  const [uploadDocumentsValue, setUploadDocumentsValue] = useState('');

  const smsVerificationMenu = [{ value: 'Twilio' }];
  const emailVerificationMenu = [{ value: 'By Code' }, { value: 'By Email' }];
  const selfieVerification = [{ value: 'None' }, { value: 'sumsub' }];
  const addressVerification = [{ value: 'None' }, { value: 'sumsub' }];
  const applicantData = [{ value: 'None' }, { value: 'sumsub' }];
  const uploadDocuments = [{ value: 'None' }, { value: 'sumsub' }];

  const menu = [{ value: 'Server - MT4' }];

  const handleSmsVerificationChange = (event) => {
    setSmsVerificationValue(event.target.value);
  };
  const handleEmailVerificationChange = (event) => {
    setEmailVerificationValue(event.target.value);
  };
  const handleSelfieVerificationChange = (event) => {
    setSelfieVerificationValue(event.target.value);
  };
  const handleAddressVerificationChange = (event) => {
    setAddressVerificationValue(event.target.value);
  };
  const handleApplicantDataChange = (event) => {
    setApplicantDataValue(event.target.value);
  };
  const handleUploadDocumentsChange = (event) => {
    setUploadDocumentsValue(event.target.value);
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
                items={applicantData}
                label={applicantDataValue}
                handleChange={handleApplicantDataChange}
                value={applicantDataValue}
                inputLabel={applicantDataValue ? applicantDataValue : 'None'}
                sx={{
                  marginLeft: 0.2,
                  minWidth: 200,
                  borderRadius: 4,
                  background: 'linear-gradient(21deg, #10abff, #1beabd)',
                }}
                menuSx={{
                  width: 200,
                }}
              />
              <Input
                label='SumSub Applicant Name'
                style={{ marginLeft: 2, width: 200 }}
                textFieldStyles={classes.textField}
              />
            </div>

            <AddFields
              div1Label='div1-label-applicationFlow'
              div2Label='div2-label-applicationFlow'
              div3Label='div3-label-applicationFlow'
              div4Label='div4-label-applicationFlow'
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
                  sx={{ marginLeft: 0, width: 200 }}
                  textFieldStyles={classes.textField}
                />
              }
              testComponent2={
                <div className='checkBox-wrapper-applicationFlow'>
                  <CheckBox />
                </div>
              }
              testComponent3={
                <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
              }
              testComponent4={<Label label='Type' className='' />}
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
            items={smsVerificationMenu}
            label={smsVerificationValue}
            handleChange={handleSmsVerificationChange}
            value={smsVerificationValue}
            inputLabel={smsVerificationValue ? smsVerificationValue : 'Twilio'}
            sx={{
              marginLeft: 0.2,
              minWidth: 200,
              borderRadius: 4,
              background: 'linear-gradient(21deg, #10abff, #1beabd)',
            }}
            menuSx={{
              width: 200,
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
            items={emailVerificationMenu}
            label={emailVerificationValue}
            handleChange={handleEmailVerificationChange}
            value={emailVerificationValue}
            inputLabel={
              emailVerificationValue ? emailVerificationValue : 'By Code'
            }
            sx={{
              marginLeft: 0.2,
              minWidth: 200,
              borderRadius: 4,
              background: 'linear-gradient(21deg, #10abff, #1beabd)',
            }}
            menuSx={{
              width: 200,
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
              items={selfieVerification}
              label={selfieVerificationValue}
              handleChange={handleSelfieVerificationChange}
              value={selfieVerificationValue}
              inputLabel={
                selfieVerificationValue ? selfieVerificationValue : 'None'
              }
              sx={{
                marginLeft: 0.2,
                minWidth: 200,
                borderRadius: 4,
                background: 'linear-gradient(21deg, #10abff, #1beabd)',
              }}
              menuSx={{
                width: 200,
              }}
            />
            <Input
              label='SumSub Applicant Name'
              style={{ marginLeft: 2, width: 200 }}
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
                items={addressVerification}
                label={addressVerificationValue}
                handleChange={handleAddressVerificationChange}
                value={addressVerificationValue}
                inputLabel={
                  addressVerificationValue ? addressVerificationValue : 'None'
                }
                sx={{
                  marginLeft: 0.2,
                  minWidth: 200,
                  borderRadius: 4,
                  background: 'linear-gradient(21deg, #10abff, #1beabd)',
                }}
                menuSx={{
                  width: 200,
                }}
              />
              <Input
                label='SumSub Applicant Name'
                style={{ marginLeft: 2, width: 200 }}
                textFieldStyles={classes.textField}
              />
            </div>

            <AddFields
              div1Label='div1-label-applicationFlow'
              div2Label='div2-label-applicationFlow'
              div3Label='div3-label-applicationFlow'
              div4Label='div4-label-applicationFlow'
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
                  sx={{ marginLeft: 0, width: 200 }}
                  textFieldStyles={classes.textField}
                />
              }
              testComponent2={
                <div className='checkBox-wrapper-applicationFlow'>
                  <CheckBox />
                </div>
              }
              testComponent3={
                <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
              }
              testComponent4={<Label label='Type' className='' />}
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
              items={uploadDocuments}
              label={uploadDocumentsValue}
              handleChange={handleUploadDocumentsChange}
              value={uploadDocumentsValue}
              inputLabel={uploadDocumentsValue ? uploadDocumentsValue : 'None'}
              sx={{
                marginLeft: 0.2,
                minWidth: 200,
                borderRadius: 4,
                background: 'linear-gradient(21deg, #10abff, #1beabd)',
              }}
              menuSx={{
                width: 200,
              }}
            />
            <Input
              label='SumSub Applicant Name'
              style={{ marginLeft: 2, width: 200 }}
              textFieldStyles={classes.textField}
            />
            <DropdownTagSelector
              sx={{
                width: 200,
                marginLeft: 2,
              }}
              widthTagSelectorOpened={200}
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
            div1Label='div1-label-applicationFlow'
            div2Label='div2-label-applicationFlow'
            div3Label='div3-label-applicationFlow'
            div4Label='div4-label-applicationFlow'
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
                sx={{ marginLeft: 0, width: 200 }}
                textFieldStyles={classes.textField}
              />
            }
            testComponent2={
              <div className='checkBox-wrapper-applicationFlow'>
                <CheckBox />
              </div>
            }
            testComponent3={
              <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
            }
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
            div1Label='div1-label-applicationFlow'
            div2Label='div2-label-applicationFlow'
            div3Label='div3-label-applicationFlow'
            div4Label='div4-label-applicationFlow'
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
                sx={{ marginLeft: 0, width: 200 }}
                textFieldStyles={classes.textField}
              />
            }
            testComponent2={
              <div className='checkBox-wrapper-applicationFlow'>
                <CheckBox />
              </div>
            }
            testComponent3={
              <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
            }
            testComponent4={<Label label='Type' className='' />}
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

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Label from '../labelComponent/Label.component';
import Dropdown from '../dropdownComponent/Dropdown.component';
import {
  DownArrowIcon,
  DeleteIconOutlinedIcon,
  DeleteItemIcon,
} from '../iconsComponent/Icons.component';
import AddFields from '../fieldsAddComponent/FieldsAdd.component';
import SearchInput from '../searchInputComponent/SearchInput.component';
import CheckBox from '../checkboxComponent/CheckBox.component';
import { makeStyles } from '@material-ui/core/styles';
import ExpandableAccordion from '../expandableAccordionComponent/ExpandableAccordion.component';
import DropdownTagSelector from '../dropdownTagSelectorComponent/DropdownTagSelector.component';
import Input from '../inputComponent/Input.component';
import ConditionsModal from '../../pages/miniPages/conditionsModalPage/conditionsModal.mini.page';
import { ConditionsModalFixed } from '../../pages/miniPages/conditionsModalPage/conditionsModal.mini.page';

import './steps.styles.css';

function Steps(props) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //extra methods
  const [addConditionApplicantData, setAddConditionApplicantData] =
    useState(true);
  const [addCustomConditionApplicantData, setAddCustomConditionApplicantData] =
    useState(true);

  const handleIsApplicantDataChange1 = () => {};

  const handleIsApplicantDataChange2 = () => {};

  const useStyles = makeStyles((theme) => ({
    textField: {
      outline: 'none',
      fontSize: 'inherit',
      borderRadius: 4,
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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

  const handleDeleteStep = () => {};

  //last methods
  const steps = [
    {
      label: 'SMS Verification',
      description: `                In SMS authentication, the user provides a code that has been
           sent to their phone via SMS as proof of their identity.`,
      content: (
        <div className='div-wrapper-applicationFlow'>
          <div className='div-wrapper-child-applicationFlow'>
            <Dropdown
              items={smsVerificationMenu}
              label={smsVerificationValue}
              handleChange={handleSmsVerificationChange}
              value={smsVerificationValue}
              inputLabel={
                smsVerificationValue ? smsVerificationValue : 'Twilio'
              }
              sx={{
                width: 200,
                borderRadius: 4,
                background: '""',
              }}
              menuSx={{
                width: 200,
              }}
            />
          </div>
        </div>
      ),
    },
    {
      label: 'E-mail Verification',
      description:
        'Email address validation is often accomplished by sending an email to the user-provided email address',
      content: (
        <div className='div-wrapper-applicationFlow'>
          <div className='div-wrapper-child-applicationFlow'>
            <Dropdown
              items={emailVerificationMenu}
              label={emailVerificationValue}
              handleChange={handleEmailVerificationChange}
              value={emailVerificationValue}
              inputLabel={
                emailVerificationValue ? emailVerificationValue : 'By Code'
              }
            />
          </div>
        </div>
      ),
    },
    {
      label: 'Selfie Verification',
      description: `Detects your face in your selfie to generate a unique number.When your selfie template matches the unique number from your profile pictures, we know you're the same person as your profile photos.`,
      content: (
        <div className='div-wrapper-applicationFlow'>
          <div className='div-wrapper-child-applicationFlow'>
            <Dropdown
              items={selfieVerification}
              label={selfieVerificationValue}
              handleChange={handleSelfieVerificationChange}
              value={selfieVerificationValue}
              inputLabel={
                selfieVerificationValue ? selfieVerificationValue : 'None'
              }
              sx={{
                width: 200,
                borderRadius: 4,
                background: '""',
              }}
              menuSx={{
                width: 200,
              }}
            />
          </div>
          <div className='div-wrapper-child-applicationFlow'>
            <Input
              label='SumSub Applicant Name'
              style={{
                border: '',
                backgroundColor: '',
                borderRadius: '15px',
                width: 200,
                opacity: 1,
                '&:hover,&:focus': {
                  border: ' ',
                  backgroundColor: '',
                  opacity: 1,
                },
              }}
              textFieldStyles={classes.textField}
            />
          </div>
        </div>
      ),
    },
    {
      label: 'Address Verification',
      description: `Address validation helps verify the accuracy of address numbers, street names postal codes.`,
      content: (
        <>
          <div className='div-wrapper-applicationFlow'>
            <div className='div-wrapper-child-applicationFlow'>
              <Dropdown
                items={addressVerification}
                label={addressVerificationValue}
                handleChange={handleAddressVerificationChange}
                value={addressVerificationValue}
                inputLabel={
                  addressVerificationValue ? addressVerificationValue : 'None'
                }
                sx={{
                  width: 200,
                  borderRadius: 4,
                  background: '""',
                }}
                menuSx={{
                  width: 200,
                }}
              />
            </div>

            <div className='div-wrapper-child-applicationFlow'>
              <Input
                label='SumSub Applicant Name'
                style={{
                  border: '',
                  backgroundColor: '',
                  borderRadius: '15px',
                  width: 200,
                  opacity: 1,
                  '&:hover,&:focus': {
                    border: ' ',
                    backgroundColor: '',
                    opacity: 1,
                  },
                }}
                textFieldStyles={classes.textField}
              />
            </div>
            <ConditionsModal
              content={
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
            <Label
              label='Add Conditions'
              className='label-nearCondition2-applicationFlow'
            />
          </div>
        </>
      ),
    },
    {
      label: 'Create Account',
      description: `                Generates the Email and password provided by the user in
                server.Having an account also gives you extra abilities and
                features to which unregistered users do not have access.`,
      content: (
        <>
          <div className='div-wrapper-applicationFlow'>
            <div className='div-wrapper-child-applicationFlow'>
              <Dropdown
                items={addressVerification}
                label={addressVerificationValue}
                handleChange={handleAddressVerificationChange}
                value={addressVerificationValue}
                inputLabel={
                  addressVerificationValue ? addressVerificationValue : 'None'
                }
                sx={{
                  width: 200,
                  borderRadius: 4,
                  background: '""',
                }}
                menuSx={{
                  width: 200,
                }}
              />
            </div>

            <div className='div-wrapper-child-applicationFlow'>
              <Input
                label='SumSub Applicant Name'
                style={{
                  border: '',
                  backgroundColor: '',
                  borderRadius: '15px',
                  width: 200,
                  opacity: 1,
                  '&:hover,&:focus': {
                    border: ' ',
                    backgroundColor: '',
                    opacity: 1,
                  },
                }}
                textFieldStyles={classes.textField}
              />
            </div>
            <ConditionsModal
              content={
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
            <Label
              label='Add Conditions'
              className='label-nearCondition2-applicationFlow'
            />
          </div>
        </>
      ),
    },
    {
      label: 'Questionnaire',
      description: `Series of questions used to collect useful information from the Clients.`,
      content: (
        <div className='div-wrapper-applicationFlow '>
          <div className='div-wrapper-child-applicationFlow'>
            <Dropdown
              items={uploadDocuments}
              label={uploadDocumentsValue}
              handleChange={handleUploadDocumentsChange}
              value={uploadDocumentsValue}
              inputLabel={uploadDocumentsValue ? uploadDocumentsValue : 'None'}
              sx={{
                width: 200,
                borderRadius: 4,
                background: '""',
              }}
              menuSx={{
                width: 200,
              }}
            />
          </div>
          <div className='div-wrapper-child-applicationFlow'>
            <Input
              label='SumSub Applicant Name'
              style={{
                border: '',
                backgroundColor: '',
                borderRadius: '15px',
                width: 200,
                opacity: 1,
                '&:hover,&:focus': {
                  border: ' ',
                  backgroundColor: '',
                  opacity: 1,
                },
              }}
              textFieldStyles={classes.textField}
            />
          </div>
          <div className='div-wrapper-child-applicationFlow'>
            <DropdownTagSelector
              sx={{
                width: 200,
              }}
              widthTagSelectorOpened={200}
            />
          </div>
        </div>
      ),
    },
    {
      label: 'Deposit Money',
      description: `Deposit is the act of placing money with a party such as a bank.`,
      content: (
        <div className='wrapper-questioner-applicationFlow '>
          <ConditionsModalFixed
            content={
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
          <Label
            label='Add Conditions'
            className='label-nearCondition-applicationFlow'
          />
        </div>
      ),
    },
    {
      label: 'Applicant Data',
      description: `Applicant Data Data related to the Client such as Nationality,Country,First Name and Last Name`,
      content: (
        <div className='div-wrapper-applicationFlow'>
          <div className='div-wrapper-child-applicationFlow'>
            <Dropdown
              items={applicantData}
              label={applicantDataValue}
              handleChange={handleApplicantDataChange}
              value={applicantDataValue}
              inputLabel={applicantDataValue ? applicantDataValue : 'None'}
              sx={{
                width: 200,
                borderRadius: 4,
                background: '""',
              }}
              menuSx={{
                width: 200,
              }}
            />
          </div>
          <div className='div-wrapper-child-applicationFlow'>
            <Input
              label='SumSub Applicant Name'
              style={{
                border: '',
                backgroundColor: '',
                borderRadius: '15px',
                width: 200,
                opacity: 1,
                '&:hover,&:focus': {
                  border: ' ',
                  backgroundColor: '',
                  opacity: 1,
                },
              }}
              textFieldStyles={classes.textField}
            />
          </div>
          <ConditionsModal
            content={
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

          <Label
            label='Add Conditions'
            className='label-nearCondition2-applicationFlow'
          />
        </div>
      ),
    },
    {
      label: 'Upload Documents',
      description: `Uploading is the transmission of a file from your computer to the server.`,
      content: (
        <div className='div-wrapper-applicationFlow '>
          <div className='div-wrapper-child-applicationFlow'>
            <Dropdown
              items={uploadDocuments}
              label={uploadDocumentsValue}
              handleChange={handleUploadDocumentsChange}
              value={uploadDocumentsValue}
              inputLabel={uploadDocumentsValue ? uploadDocumentsValue : 'None'}
              sx={{
                width: 200,
                borderRadius: 4,
                background: '""',
              }}
              menuSx={{
                width: 200,
              }}
            />
          </div>
          <div className='div-wrapper-child-applicationFlow'>
            <Input
              label='SumSub Applicant Name'
              style={{
                border: '',
                backgroundColor: '',
                borderRadius: '15px',
                width: 200,
                opacity: 1,
                '&:hover,&:focus': {
                  border: ' ',
                  backgroundColor: '',
                  opacity: 1,
                },
              }}
              textFieldStyles={classes.textField}
            />
          </div>
          <div className='div-wrapper-child-applicationFlow'>
            <DropdownTagSelector
              sx={{
                width: 200,
              }}
              widthTagSelectorOpened={200}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <Box sx={{ maxWidth: '100%' }}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant='caption'>Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {step.content}

              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant='contained'
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

export default Steps;

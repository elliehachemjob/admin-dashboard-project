import React, { useState } from 'react';
import {
  NewGoBackIcon,
  AddressVerificationIcon,
  ProfileIconOutlined,
  SmsVerificationOutlinedIcon,
  EmailVerificationOutlinedIconIcon,
  SelfieVerificationOutlinedIcon,
  UploadDocumentIcon,
  QuestionnaireIcon,
  AddItemIcon,
  DepositMoneyIcon,
} from '../../components/iconsComponent/Icons.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../components/labelComponent/Label.component';
import BreakLine from '../../components/breakLineComponent/BreakLine.component';
import ApplicationFlowFill from './applicantionFlowFill/applicationFlowFill.page';
import './newApplicationFlow.styles.css';
function NewApplicationFlow() {
  const [isApplicantData, setIsApplicantData] = useState(false);
  const [isSmsVerification, setIsSmsVerification] = useState(false);
  const [isEmailVerification, setIsEmailVerification] = useState(false);
  const [counter, setCounter] = useState(1);
  const [submitFlowGlow, setSubmitFlowGlow] = useState('');
  const [isCounterStepDisplay, setIsCounterStepDisplay] = useState('');
  const Step1Component = () => {
    return (
      <>
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <ProfileIconOutlined style={{ fontSize: 30 }} />
            <Label
              label='Applicant Data'
              className='labelIcon1-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <SmsVerificationOutlinedIcon style={{ fontSize: 30 }} />
            <Label
              label='SMS Verification'
              className='labelIcon2-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <EmailVerificationOutlinedIconIcon />
          <Label
            label='E-mail Verification'
            className='label-newApplicationFlow'
          />
        </div>
      </>
    );
  };

  const Step2Component = () => {
    return (
      <>
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <SelfieVerificationOutlinedIcon style={{ fontSize: 30 }} />
            <Label
              label='Selfie Verification'
              className='labelIcon1-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <AddressVerificationIcon style={{ fontSize: 30 }} />
            <Label
              label='Address Verification'
              className='labelIcon2-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <UploadDocumentIcon />
          <Label
            label='Upload Documents'
            className='label-newApplicationFlow'
          />
        </div>
      </>
    );
  };
  const Step3Component = () => {
    return (
      <>
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <QuestionnaireIcon style={{ fontSize: 30 }} />
            <Label
              label='Questionnaire'
              className='labelIcon1-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <AddItemIcon style={{ fontSize: 30 }} />
            <Label
              label='Create Account'
              className='labelIcon2-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <DepositMoneyIcon />
          <Label label='Deposit Money' className='label-newApplicationFlow' />
        </div>
      </>
    );
  };

  const [stepsList, setStepsList] = useState(Step1Component);

  const handleMouseOverChange1 = () => {
    setIsApplicantData(true);
  };
  const handleMouseOverChange2 = () => {
    setIsSmsVerification(true);
  };
  const handleMouseOverChange3 = () => {
    setIsEmailVerification(true);
  };

  const handleBackwardChange = () => {
    setCounter((prev) => {
      return prev - 1;
    });
    if (counter <= 1) {
      setCounter(1);
    }

    if (counter === 2) {
      setStepsList(Step1Component);
    }
    if (counter === 3) {
      setStepsList(Step2Component);
      setSubmitFlowGlow('setSubmitFlowGlow');
    }
  };

  const handleForwardChange = () => {
    setCounter((prev) => {
      return prev + 1;
    });
    if (counter >= 3) {
      setCounter(3);
    }

    if (counter === 1) {
      setStepsList(Step2Component);
    }
    if (counter === 2) {
      setStepsList(Step3Component);
      setSubmitFlowGlow('0px 0px 30px 10px hsl(163.2,41.3%,35.9%)');
    }
  };

  const handleSubmitChange = () => {
    setStepsList(<ApplicationFlowFill />);
    setIsCounterStepDisplay('none');
  };
  return (
    <div className='parent-newApplicationFlow'>
      {/* 1st left side */}
      <div className='wrapper-left-newApplicationFlow'>
        <NewGoBackIcon className='newGoBackIcon-newApplicationFlow' />
        <Label label='Flow Setup' className='header-newApplicationFlow' />

        <Label label='Levels' className='levelsLabel-newApplicationFlow' />
        {/* 2nd */}
        <div className='parent-stepsWrapper-newApplicationFlow'>
          <div
            className='wrapperIconLabel-background-newApplicationFlow'
            onMouseOver={handleMouseOverChange1}
          >
            <div className='iconWrapper-newApplicationFlow'>
              <ProfileIconOutlined style={{ fontSize: 50 }} />
            </div>
          </div>
          <div className='wrapperIconLabel-background-newApplicationFlow'>
            <div
              className='iconWrapper-newApplicationFlow'
              onMouseOver={handleMouseOverChange2}
            >
              <SmsVerificationOutlinedIcon
                style={{ fontSize: 50 }}
                className='iconStyles-newApplicationFlow'
              />
            </div>
          </div>
          <div className='wrapperIconLabel-background-newApplicationFlow'>
            <div className='iconWrapper3-newApplicationFlow'>
              <EmailVerificationOutlinedIconIcon
                style={{ fontSize: 50 }}
                className='iconStyles-newApplicationFlow'
              />
            </div>
          </div>
          <div className='iconWrapper-newApplicationFlow'>
            <SelfieVerificationOutlinedIcon
              style={{ fontSize: 50 }}
              className='iconStyles-newApplicationFlow'
            />
          </div>
          <div className='iconWrapper-newApplicationFlow'>
            <AddressVerificationIcon
              style={{ fontSize: 50 }}
              className='iconStyles-newApplicationFlow'
            />
          </div>
          <div className='iconWrapper-newApplicationFlow'>
            <UploadDocumentIcon
              style={{ fontSize: 50 }}
              className='iconStyles-newApplicationFlow'
            />
          </div>
          <div className='iconWrapper-newApplicationFlow'>
            <QuestionnaireIcon
              style={{ fontSize: 50 }}
              className='iconStyles-newApplicationFlow'
            />
          </div>
          <div className='iconWrapper-newApplicationFlow'>
            <AddItemIcon
              style={{ fontSize: 50 }}
              className='iconStyles-newApplicationFlow'
            />
          </div>
          <div className='iconWrapper-newApplicationFlow'>
            <DepositMoneyIcon
              style={{ fontSize: 50 }}
              className='iconStyles-newApplicationFlow'
            />
          </div>
        </div>
        <div className='buttonWrapper-newApplicationFlow'>
          <Button
            onClick={handleSubmitChange}
            className=''
            name={
              <div className=''>
                <Label
                  label='Submit Flow'
                  className='buttonLabel-newApplicationFlow'
                />
              </div>
            }
            variant='contained'
            sx={{
              backgroundColor: 'hsl(163.2,41.3%,55.9%)',
              borderRadius: '25px',

              padding: 1.5,
              paddingLeft: 3,
              paddingRight: 3,
              boxShadow: submitFlowGlow,
              '&:hover': {
                backgroundColor: 'hsl(163.2,41.3%,45.9%)',
                boxShadow: '0 0 5px 0	hsl(163.2,41.3%,35.9%)',

                transition: '1s',
              },
            }}
          />
        </div>
      </div>
      {/* 3rd right side */}
      <div className='wrapper-right-newApplicationFlow'>
        <div className='rightSide-steps-newApplicationFlow'>
          {/* <BreakLine className='breakLineIndicator-newApplicationFlow' /> */}
          {stepsList}
        </div>
        <div style={{ display: isCounterStepDisplay }}>
          <div className='navigateSteps-newApplicationFlow'>
            <NewGoBackIcon
              className='backwardIcon-newApplicationFlow'
              onClick={handleBackwardChange}
            />
            <div className='steps-counter-newApplicationFlow'>{counter}</div>
            <NewGoBackIcon
              className='forwardIcon-newApplicationFlow'
              onClick={handleForwardChange}
            />
          </div>
        </div>
      </div>
      {/* 4th  later deduced*/}
    </div>
  );
}

export default NewApplicationFlow;

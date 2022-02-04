import React from 'react';
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
import './newApplicationFlow.styles.css';
function NewApplicationFlow() {
  return (
    <div className='parent-newApplicationFlow'>
      {/* 1st left side */}
      <div className='wrapper-left-newApplicationFlow'>
        <NewGoBackIcon className='newGoBackIcon-newApplicationFlow' />
        <Label label='Flow Setup' className='header-newApplicationFlow' />

        <Label label='Levels' className='levelsLabel-newApplicationFlow' />
        {/* 2nd */}
        <div className='parent-stepsWrapper-newApplicationFlow'>
          <div className='iconWrapper-newApplicationFlow'>
            <ProfileIconOutlined style={{ fontSize: 50 }} />
          </div>
          <div className='iconWrapper-newApplicationFlow'>
            <SmsVerificationOutlinedIcon
              style={{ fontSize: 50 }}
              className='iconStyles-newApplicationFlow'
            />
          </div>
          <div className='iconWrapper-newApplicationFlow'>
            <EmailVerificationOutlinedIconIcon
              style={{ fontSize: 50 }}
              className='iconStyles-newApplicationFlow'
            />
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
            className='button-fieldsAdd'
            name={
              <div className=''>
                <Label label='Submit Flow' className='' />
              </div>
            }
            variant='contained'
            sx={{
              backgroundColor: 'hsl(163.2,41.3%,55.9%)',
              borderRadius: '10px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'hsl(163.2,41.3%,45.9%)',
                borderRadius: '10px',
                boxShadow: '0 0 5px 0 	hsl(163.2,41.3%,35.9%)',
              },
            }}
          />
        </div>
      </div>

      {/* 3rd right side */}
      <div className='wrapper-right-newApplicationFlow'>
        <div className='rightSide-steps-newApplicationFlow'>
          <div>
            <Label
              label='Applicant Data'
              className='label-newApplicationFlow'
            />
            <ProfileIconOutlined />
          </div>
          <BreakLine className='breakLine-steps-newApplicationFlow' />
          <div>
            <Label
              label='SMS Verification'
              className='label-newApplicationFlow'
            />
            <SmsVerificationOutlinedIcon className='breakLine-steps-newApplicationFlow' />
          </div>
          <BreakLine className='breakLine-steps-newApplicationFlow' />

          <div>
            <Label
              label='E-mail Verification'
              className='label-newApplicationFlow'
            />
            <EmailVerificationOutlinedIconIcon />
          </div>
        </div>
      </div>
      {/* 4th  later deduced*/}
    </div>
  );
}

export default NewApplicationFlow;

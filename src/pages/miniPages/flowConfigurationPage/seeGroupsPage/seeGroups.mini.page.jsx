import React, { useState } from 'react';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import {
  SpecialEditIcon,
  BlackCircleIcon,
} from '../../../../components/iconsComponent/Icons.component';
import Label from '../../../../components/labelComponent/Label.component';
import BreakLine from '../../../../components/breakLineComponent/BreakLine.component';
import './seeGroups.mini.styles.css';
import ToggleList from '../../../../components/ListComponents/toggleListComponent/ToggleList.component';

function SeeGroups() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [labelCondition, setLabelCondition] = useState('Applicant Data');
  const [label1, setLabel1] = useState([
    {
      id: 1,
      label: <Label className='toggle-label-seeGroups' label='Skip Grouping' />,
    },
    {
      id: 2,
      label: <Label className='toggle-label-seeGroups' label='Platforms' />,
    },
  ]);

  const handleApplicantData = () => {
    setLabelCondition('Applicant Data');
  };

  const HandleDefaultAccountConditions = () => {
    setLabelCondition('Default Account Conditions');
  };
  const HandleIdentityVerification = () => {
    setLabelCondition('Identity Verification');
  };

  const HandleAddressVerification = () => {
    setLabelCondition('Address Verification');
  };

  const HandleCompleteYourProfile = () => {
    setLabelCondition('Complete your profile');
  };

  return (
    <ModalUsage
      open={open}
      handleClose={handleClose}
      icon={<SpecialEditIcon onClick={handleOpen} />}
      minWidth={1200}
    >
      {/* 1st */}
      <Label className='header-seeGroups' label='Condition 1' />
      <div className='stepsWrapper-container-seeGroups'>
        {/* 2nd */}
        <div
          className='steps-container-seeGroups'
          onClick={handleApplicantData}
        >
          <div className='container-Icon-seeGroups'>
            <BlackCircleIcon className='icon-defaults-seeGroup' />
            <div className='icon-number-seeGroups'>1</div>
          </div>
          <Label className='label-seeGroups' label='Applicant Data' />
          <BreakLine className='breakLine-seeGroups' />
        </div>

        <div
          className='steps-container-seeGroups'
          onClick={HandleDefaultAccountConditions}
        >
          <div className='container-Icon-seeGroups'>
            <BlackCircleIcon className='icon-defaults-seeGroup' />
            <div className='icon-number-seeGroups'>2</div>
          </div>
          <Label
            className='label-seeGroups'
            label='Default Account Conditions'
          />
          <BreakLine className='breakLine-seeGroups' />
        </div>

        <div
          className='steps-container-seeGroups'
          onClick={HandleIdentityVerification}
        >
          <div className='container-Icon-seeGroups'>
            <BlackCircleIcon className='icon-defaults-seeGroup' />
            <div className='icon-number-seeGroups'>3</div>
          </div>
          <Label className='label-seeGroups' label='Identity Verification' />
          <BreakLine className='breakLine-seeGroups' />
        </div>

        <div
          className='steps-container-seeGroups'
          onClick={HandleAddressVerification}
        >
          <div className='container-Icon-seeGroups'>
            <BlackCircleIcon className='icon-defaults-seeGroup' />
            <div className='icon-number-seeGroups'>4</div>
          </div>
          <Label className='label-seeGroups' label='Address Verification' />
          <BreakLine className='breakLine-seeGroups' />
        </div>
        <div
          className='steps-container-seeGroups'
          onClick={HandleCompleteYourProfile}
        >
          <div className='container-Icon-seeGroups'>
            <BlackCircleIcon className='icon-defaults-seeGroup' />
            <div className='icon-number-seeGroups'>5</div>
          </div>
          <Label className='label-seeGroups' label='Complete your profile' />
        </div>
      </div>
      {/* 3rd */}
      <Label className='specialLabel-seeGroups' label={labelCondition} />
      <ToggleList
        key={label1.id}
        list={label1}
        parent='toggle-list-parent-seeGroups'
        div1='div1-toggle-list-parent-seeGroups'
        div2='div2-toggle-list-parent-seeGroups'
      />
    </ModalUsage>
  );
}

export default SeeGroups;

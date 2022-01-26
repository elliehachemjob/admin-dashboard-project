import React, { useState } from 'react';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import {
  SpecialEditIcon,
  BlackCircleIcon,
} from '../../../../components/iconsComponent/Icons.component';
import './seeGroups.mini.styles.css';

function SeeGroups() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ModalUsage
      open={open}
      handleClose={handleClose}
      icon={<SpecialEditIcon onClick={handleOpen} />}
    >
      {/* 1st */}
      <div>Condition 1 Label</div>

      {/* 2nd */}
      <div>Applicant Data Label</div>
      <div>Circle Icon and 1 in it</div>
      <div>Divider</div>
      <div>Default Account Conditions Label</div>
      <div>Circle Icon and 2 in it</div>
      <div>
        <div className='icon-number-seeGroups'>Hi</div>
        <BlackCircleIcon className='icon-flowConfiguration-defaults-seeGroup' />
      </div>

      <div>Divider</div>
      <div>Identity Verification Label</div>
      <div>Circle Icon and 3 in it</div>
      <div>Divider</div>
      <div>Address Verification Label</div>
      <div>Circle Icon and 4 in it</div>
      <div>Divider</div>
      <div>Complete your profile Label</div>
      <div>Circle Icon and 5 in it</div>
      {/* 3rd */}
      <div>Default Account Conditions Label</div>
      <div>Skip Grouping Toggle</div>
      <div>Platforms Toggle</div>
    </ModalUsage>
  );
}

export default SeeGroups;

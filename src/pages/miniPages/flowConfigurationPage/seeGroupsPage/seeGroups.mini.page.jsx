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
      <div className='container-Icon'>
        <BlackCircleIcon className='icon-flowConfiguration-defaults-seeGroup' />
        <div
          className='icon-number-seeGroups'
          style={{
            fontSize: 13,
            position: 'absolute',
            top: '4%',
            left: '1.5%',
          }}
        >
          1
        </div>
      </div>
      <div>Divider</div>
      <div>Default Account Conditions Label</div>
      <div className='container-Icon'>
        <BlackCircleIcon className='icon-flowConfiguration-defaults-seeGroup' />
        <div
          className='icon-number-seeGroups'
          style={{
            fontSize: 13,
            position: 'absolute',
            top: '4%',
            left: '1.5%',
          }}
        >
          2
        </div>
      </div>

      <div>Divider</div>
      <div>Identity Verification Label</div>
      <div className='container-Icon'>
        <BlackCircleIcon className='icon-flowConfiguration-defaults-seeGroup' />
        <div
          className='icon-number-seeGroups'
          style={{
            fontSize: 13,
            position: 'absolute',
            top: '4%',
            left: '1.5%',
          }}
        >
          3
        </div>
      </div>
      <div>Divider</div>
      <div>Address Verification Label</div>
      <div className='container-Icon'>
        <BlackCircleIcon className='icon-flowConfiguration-defaults-seeGroup' />
        <div
          className='icon-number-seeGroups'
          style={{
            fontSize: 13,
            position: 'absolute',
            top: '4%',
            left: '1.5%',
          }}
        >
          4
        </div>
      </div>
      <div>Divider</div>
      <div>Complete your profile Label</div>
      <div className='container-Icon'>
        <BlackCircleIcon className='icon-flowConfiguration-defaults-seeGroup' />
        <div
          className='icon-number-seeGroups'
          style={{
            fontSize: 13,
            position: 'absolute',
            top: '4%',
            left: '1.5%',
          }}
        >
          5
        </div>
      </div>
      {/* 3rd */}
      <div>Default Account Conditions Label</div>
      <div>Skip Grouping Toggle</div>
      <div>Platforms Toggle</div>
    </ModalUsage>
  );
}

export default SeeGroups;

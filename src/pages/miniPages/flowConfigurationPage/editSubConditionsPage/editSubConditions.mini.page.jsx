import React, { useState } from 'react';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import { StackIcon } from '../../../../components/iconsComponent/Icons.component';

import './editSubConditions.mini.styles.css';

function EditSubConditions(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ModalUsage
      open={open}
      handleClose={handleClose}
      icon={<StackIcon onClick={handleOpen} />}
    >
      {/* 1st */}
      <div>Condition 1 Label</div>
      {/* 2st */}
      <div>Primary Label</div>
      {/* 3rd */}
      <div>Expandable Accordion</div>
      <div>Deadline Label</div>
      {/* onExpand */}
      <div>Restriction Toggle</div>
      <div>Divider</div>
      <div> Set How Many Days Client Have To Complete Profile Label</div>
      <div>Input with holder 0</div>
      {/* 4th */}
      <div>Expandable Accordion</div>
      <div>SumSub Label</div>
      {/* onExpand */}
      <div>Divider</div>
      <div>
        Select After Which Step you want to Verify data with SumSub Label
      </div>
      <div>Search Input </div>
      {/* 5th */}
      <div>Expandable Accordion</div>
      <div>Phone OTP Label</div>
      {/* onExpand */}
      <div>Restrict phone to the domain of Country of residence Label</div>
      <div>Restriction Toggle </div>
      <div>Check if phone exist Label</div>
      <div>Check If Exist Toggle</div>
    </ModalUsage>
  );
}

export default EditSubConditions;

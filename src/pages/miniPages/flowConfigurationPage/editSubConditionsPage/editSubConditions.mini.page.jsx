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
      <div>Label</div>
      <div>Input</div>
      {/* 4th */}
      
      <div>Expandable Accordion</div>
      <div>SumSub Label</div>

      {/* 5th */}
      <div>Expandable Accordion</div>
      <div>Phone OTP Label</div>
    </ModalUsage>
  );
}

export default EditSubConditions;

import React, { useState } from 'react';
import './conditionsModal.mini.styles.css';
import ModalUsage from '../../../components/modalUsageComponent/ModalUsage.component';
import { ConditionsIcon } from '../../../components/iconsComponent/Icons.component';

function ConditionsModal(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ModalUsage
      open={open}
      handleClose={handleClose}
      modalBackground='#C1E0F7'
      icon={<ConditionsIcon className='' onClick={handleOpen} />}
    >
      {props.content}
    </ModalUsage>
  );
}

export default ConditionsModal;

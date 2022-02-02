import React, { useState } from 'react';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import { CreateIcon } from '../../../../components/iconsComponent/Icons.component';
import './buildFormModal.mini.page';

function BuildFormModal(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ModalUsage
      open={open}
      handleClose={handleClose}
      modalBackground='#C1E0F7'
      icon={<CreateIcon className='' onClick={handleOpen} />}
    >
      {props.content}
    </ModalUsage>
  );
}

export default BuildFormModal;

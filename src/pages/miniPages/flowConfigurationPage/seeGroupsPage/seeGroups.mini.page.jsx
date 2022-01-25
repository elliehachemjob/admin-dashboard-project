import React, { useState } from 'react';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import { SpecialEditIcon } from '../../../../components/iconsComponent/Icons.component';
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

      
      See Group Modal Here
    </ModalUsage>
  );
}

export default SeeGroups;

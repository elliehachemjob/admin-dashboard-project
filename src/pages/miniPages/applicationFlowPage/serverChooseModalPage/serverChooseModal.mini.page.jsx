import React from 'react';
import './serverChooseModal.mini.styles.css';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';

function ServerChooseModal() {
  return (
    <ModalUsage
      popupButtonName='Choose Server'
      sx={{
        backgroundColor: '#2B3A67',
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: '#5E807F',
          borderRadius: '10px',
        },
      }}
      modalBackground='#C1E0F7'
    >
      Choose Server
    </ModalUsage>
  );
}

export default ServerChooseModal;

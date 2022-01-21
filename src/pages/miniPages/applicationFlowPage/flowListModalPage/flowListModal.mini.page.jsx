import React, { useState } from 'react';
import './flowListModal.mini.styles.css';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';

function FlowListModal() {
  const [createFlows, setCreatedFlows] = useState([{ id: 1, flowName: '' }]);

  return (
    <ModalUsage
      popupButtonName='Choose Flow'
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
      Choose Flow
    </ModalUsage>
  );
}

export default FlowListModal;

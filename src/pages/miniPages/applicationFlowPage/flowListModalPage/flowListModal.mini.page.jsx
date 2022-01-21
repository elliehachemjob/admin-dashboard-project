import React, { useState } from 'react';
import './flowListModal.mini.styles.css';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import Button from '../../../../components/FlexibleButtonComponent/FlexibleButton.component';

function FlowListModal() {
  const [createFlows, setCreatedFlows] = useState([
    { id: 1, flowName: 'Main Registration  Flow' },
    { id: 2, flowName: 'USA  Registration flow' },
    { id: 3, flowName: 'UK  Registration Flow' },
  ]);

  return (
    <ModalUsage
      popupButtonName='Choose Flow'
      sx={{
        backgroundColor: '#2B3A67',
        borderRadius: '10px',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: '#5E807F',
          borderRadius: '10px',
        },
      }}
      modalBackground='#C1E0F7'
    >
      {createFlows.map((item) => {
        return (
          <div className='wrapper-flowListModal'>
            <div key={item.key}>
              <Button
                className='button-fieldsAdd'
                name={item.flowName}
                variant='contained'
                sx={{
                  backgroundColor: '#2B3A67',
                  borderRadius: '10px',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#5E807F',
                    borderRadius: '10px',
                  },
                }}
              />
            </div>
          </div>
        );
      })}
    </ModalUsage>
  );
}

export default FlowListModal;

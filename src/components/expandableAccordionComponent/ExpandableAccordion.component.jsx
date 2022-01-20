import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ExpandableAccordion(props) {
  return (
    <Accordion
      sx={
        props.sx
          ? props.sx
          : {
              marginTop: '10px',
              marginBottom: '10px',
              backgroundColor: '#11468F05',
              border: '1px solid #11468F10',
              '&:hover': {
                backgroundColor: '#11468F10',
                border: '1px solid #11468F30',
              },
            }
      }
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        {props.section1}
      </AccordionSummary>

      <AccordionDetails>{props.section2}</AccordionDetails>
    </Accordion>
  );
}

export default ExpandableAccordion;

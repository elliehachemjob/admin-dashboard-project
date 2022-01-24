import React, { useState } from 'react';
import ExpandableAccordion from '../expandableAccordionComponent/ExpandableAccordion.component';

import './buildForm.styles.css';

function BuildForm() {
  const [array, setArray] = useState();

  return (
    <>
      {/* 1st  */}
      <ExpandableAccordion section1={'hi'} />
      <ExpandableAccordion />
      <ExpandableAccordion />
      <ExpandableAccordion />
      <ExpandableAccordion />
      <ExpandableAccordion />
      <ExpandableAccordion />
      <ExpandableAccordion />
      <div>expandable accordion</div>
      <div>Input with label email and toggle list at same time</div>
    </>
  );
}

export default BuildForm;

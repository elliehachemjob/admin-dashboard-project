import React, { useState } from 'react';
import ApplicationFlowPage from '../miniPages/applicationFlowPage/applicationFlow.mini.page';
import FlowConfiguration from '../miniPages/flowConfigurationPage/flowConfiguration.mini.page';
import './onBoarding.styles.css';

function OnBoarding() {
  return (
    <div className='parent-onBoarding'>
      {/* 1st */}
      {/* <QuestionnaireAddModal /> */}
      {/* 2nd */}
      <div className='div1-onBoarding'>
        <ApplicationFlowPage />
      </div>
      {/* 3rd */}
      <div className='div2-onBoarding'>
        <FlowConfiguration />
      </div>
    </div>
  );
}

export default OnBoarding;

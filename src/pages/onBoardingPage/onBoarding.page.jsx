import React, { useState } from 'react';
import QuestionnaireAddModal from '../miniPages/questionnaireModalPage/questionnaireAddModal.component';
import ApplicationFlowPage from '../miniPages/applicationFlowPage/applicationFlowPage.mini.page';
import FlowStepsModal from '../miniPages/flowStepsModalPage/flowStepsModal.mini.page';

function OnBoarding() {
  return (
    <>
      {/* 1st */}
      {/* <QuestionnaireAddModal /> */}
      {/* 2nd */}
      <ApplicationFlowPage />
      {/* 3rd */}
      <FlowStepsModal />
    </>
  );
}

export default OnBoarding;

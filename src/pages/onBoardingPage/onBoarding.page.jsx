import React, { useState } from 'react';
import QuestionnaireAddModal from '../miniPages/questionnaireModalPage/questionnaireAddModal.component';
import ApplicationFlowPage from '../miniPages/applicationFlowPage/applicationFlow.mini.page';
import ListFieldsAddComponent from '../../components/ListComponents/ListFieldsAddComponent/ListFieldsAddComponent.component';
import FlowConfiguration from '../miniPages/flowConfigurationPage/flowConfiguration.mini.page';

function OnBoarding() {
  return (
    <>
      {/* 1st */}
      <QuestionnaireAddModal />
      {/* 2nd */}
      {/* <ApplicationFlowPage /> */}
      {/* 3rd */}
      {/* <FlowConfiguration /> */}
    </>
  );
}

export default OnBoarding;

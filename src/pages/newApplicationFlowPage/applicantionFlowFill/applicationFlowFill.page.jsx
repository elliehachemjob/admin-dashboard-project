import React from 'react';

import './applicationFlowFill.styles.css';

function ApplicationFlowFill() {
  return (
    <>
      {/* 1st */}
      <div>Container</div>
      <div>Level Name Label</div>
      <div>Input with basic-kyc-level data</div>
      {/* 2nd */}
      <div>Container</div>
      <div>Required Steps Label</div>
      <div>Divider /outline the words</div>
      <div>
        Label that says : "here you should set up the steps that are required
        from your customers to complete the verification process"
      </div>
      <div>
        Label that says :" Please note that the order of these steps is
        important, as it defines your customer's journey "
      </div>
      {/* 3rd */}
      <div>steps information Filling component</div>
      {/* 4th */}
      <div> Countries and Territories</div>
      <div>Included Radio Button</div>
      <div>Excluded Radio Button</div>
      <div>dropdown says select included countries </div>
      <div>
        Label that says "Here you may specify the countries that this applicant
        level supports.leave this field empty if there is no restrictions"
      </div>
      <div>Source Key Label</div>
      <div>dropdown says select options </div>
      <div>Email Notifications Checkbox</div>
      <div>Use Custom ID documents Settings</div>
      {/* 5th */}
      <div>Add New Flow Button</div>
      <div>Save button</div>
    </>
  );
}

export default ApplicationFlowFill;

import React from 'react';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import './flowStepsModal.mini.styles.css';
import Description from '../../../../components/descriptionComponent/Description.component';
import Button from '../../../../components/FlexibleButtonComponent/FlexibleButton.component';

function FlowStepsModal() {
  return (
    <ModalUsage
      popupButtonName='Edit Flow Steps'
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
      <div className='parent-flowStepsModal'>
        <div className='div1-flowStepsModal'>
          <Button
            className='button-fieldsAdd'
            name='SMS Verification'
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '20px',
              },
            }}
          />
        </div>
        <div className='div2-flowStepsModal'>
          <Description className='description-flowStepsModal'>
            In SMS authentication, the user provides a code that has been sent
            to their phone via SMS as proof of their identity.
          </Description>
        </div>
        <div className='div3-flowStepsModal'>
          <Button
            className='button-fieldsAdd'
            name='Email Verification'
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '20px',
              },
            }}
          />
        </div>
        <div className='div4-flowStepsModal'>
          <Description className='description-flowStepsModal'>
            Email address validation is often accomplished by sending an email
            to the user-provided email address.
          </Description>
        </div>
        <div className='div5-flowStepsModal'>
          <Button
            className='button-fieldsAdd'
            name='Selfie Verification'
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '20px',
              },
            }}
          />
        </div>
        <div className='div6-flowStepsModal'>
          <Description className='description-flowStepsModal'>
            Detects your face in your selfie to generate a unique number.When
            your selfie template matches the unique number from your profile
            pictures, we know you're the same person as your profile photos.
          </Description>
        </div>
        <div className='div7-flowStepsModal'>
          <Button
            className='button-fieldsAdd'
            name='Address Verification'
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '20px',
              },
            }}
          />
        </div>
        <div className='div8-flowStepsModal'>
          <Description className='description-flowStepsModal'>
            Address validation helps verify the accuracy of address numbers,
            street names postal codes.
          </Description>
        </div>
        <div className='div9-flowStepsModal'>
          <Button
            className='button-fieldsAdd'
            name='Create Account'
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '20px',
              },
            }}
          />
        </div>
        <div className='div10-flowStepsModal'>
          <Description className='description-flowStepsModal'>
            Generates the Email and password provided by the user in
            server.Having an account also gives you extra abilities and features
            to which unregistered users do not have access.
          </Description>
        </div>
        <div className='div11-flowStepsModal'>
          <Button
            className='button-fieldsAdd'
            name='Questionnaire'
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '20px',
              },
            }}
          />
        </div>
        <div className='div12-flowStepsModal'>
          <Description className='description-flowStepsModal'>
            Series of questions used to collect useful information from the
            Clients
          </Description>
        </div>
        <div className='div13-flowStepsModal'>
          <Button
            className='button-fieldsAdd'
            name='Deposit Money'
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '20px',
              },
            }}
          />
        </div>
        <div className='div14-flowStepsModal'>
          <Description className='description-flowStepsModal'>
            Deposit is the act of placing money with a party such as a bank
          </Description>
        </div>
        <div className='div15-flowStepsModal'>
          <Button
            className='button-fieldsAdd'
            name='Applicant Data'
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '20px',
              },
            }}
          />
        </div>
        <div className='div16-flowStepsModal'>
          <Description className='description-flowStepsModal'>
            Applicant Data Data related to the Client such as
            Nationality,Country,First Name and Last Name
          </Description>
        </div>
        <div className='div17-flowStepsModal'>
          <Button
            className='button-fieldsAdd'
            name='Upload Documents'
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '20px',
              },
            }}
          />
        </div>
        <div className='div18-flowStepsModal'>
          <Description className='description-flowStepsModal'>
            Uploading is the transmission of a file from your computer to the
            server.
          </Description>
        </div>
      </div>
    </ModalUsage>
  );
}

export default FlowStepsModal;

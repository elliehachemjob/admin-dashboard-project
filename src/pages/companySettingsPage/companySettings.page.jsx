import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  SpecialLinkIcon,
  EditItemIcon,
  AddItemIcon,
  ProfileIcon,
  DeleteItemIcon,
} from '../../components/iconsComponent/Icons.component';
import Input from '../../components/inputComponent/Input.component';
import Upload from '../../components/uploadComponent/Upload.component';
import CheckBox from '../../components/checkboxComponent/CheckBox.component';
import Description from '../../components/descriptionComponent/Description.component';
import Image from '../../components/imageComponent/Image.component';
import DarkLogo from '../../assets/images/DarkLogo.png';
import SecondaryLogo from '../../assets/images/DarkLogo.png';
import SmallLogo from '../../assets/images/DarkLogo.png';
import SecondarySmallLogo from '../../assets/images/DarkLogo.png';
import './companySettings.styles.css';
function CompanySettings() {
  const [registrationLinks, setRegistrationLinks] = useState();
  const [registrationLinks2, setRegistrationLinks2] = useState();
  const [platformLinks, setPlatformLinks] = useState();
  const [platformLinks2, setPlatformLinks2] = useState();

  const [companyDetailsState, setCompanyDetailsState] = useState({
    companyName: '',
    YOONITPortalURLLink: '',
    companyAddress: '',
    companyPhone: '',
    companySite: '',
  });

  function handleCompanyDetailChange(evt) {
    const value = evt.target.value;
    setCompanyDetailsState({
      ...companyDetailsState,
      [evt.target.name]: value,
    });
  }

  const [mailServiceSettings, setMailServiceSettings] = useState({
    hostName: '',
    port: '',
    username: '',
    password: '',
    backOfficeEmail: '',
    enableSSL: false,
    usernameOptional: '',
    displaySendersNameOptional: '',
  });

  function handleEmailServiceSettingsChange(evt) {
    const value = evt.target.value;
    setMailServiceSettings({
      ...mailServiceSettings,
      [evt.target.name]: value,
    });
    console.log('hey');
  }

  const handleRegistrationLinksChange = (event) => {
    setRegistrationLinks(event.target.value);
  };
  const handleRegistrationLinks2Change = (event) => {
    setRegistrationLinks2(event.target.value);
  };

  const handlePlatformLinksChange = (event) => {
    setPlatformLinks(event.target.value);
  };

  const handlePlatformLinks2Change = (event) => {
    setPlatformLinks2(event.target.value);
  };

  return (
    <>
      {/* 1st */}
      <div className='parent-companyImage'>
        <div className='div1-companyImage'>
          <Label label='Company Image' size={18.72} />
          <ProfileIcon className='profileIcon-companySettings' />

          <Upload />
          <Description description='Upload your logo with dimension: 320px * 160px, png format with transparent background.'>
            <CheckBox />
          </Description>
        </div>
        <div className='div2-companyImage'>
          <div className='parent-logoWrapper-companySettings'>
            <div className='div1-logoWrapper-companySettings'>
              <Label label='Light' />
              <Image src={DarkLogo} style={{ width: 250, height: 250 }} />
              <DeleteItemIcon />
            </div>
            <div className='div2-logoWrapper-companySettings'>
              <Label label='Secondary Icon In Tab: (Please Note It Should Be 40px x 40px.)' />
              <Image src={SecondaryLogo} style={{ width: 250, height: 250 }} />
              <DeleteItemIcon />
            </div>
            <div className='div3-logoWrapper-companySettings'>
              <Label label='Dark Theme: (no dark colors)' />
              <Image src={SmallLogo} style={{ width: 250, height: 250 }} />
              <DeleteItemIcon />
            </div>
            <div className='div4-logoWrapper-companySettings'>
              <Label label='Tab Browser Icon: (Please note it should be tiny and .ico format.)' />
              <Image
                src={SecondarySmallLogo}
                style={{ width: 250, height: 250 }}
              />
              <DeleteItemIcon />
            </div>
          </div>
        </div>
      </div>
      <div className='button-wrapper-companySettings'>
        <Button className='button-companySettings' name='Save Changes' />
      </div>
      {/* 2nd  */}
      <Label label='Company Details' size={18.72} />
      <div className='parent-wrapper-companyDetails'>
        <div className='div1-wrapper-companyDetails'>
          <Label label='Company Name' />
          <Input
            value={mailServiceSettings.companyName}
            onChange={handleEmailServiceSettingsChange}
            label='PLUGIT LTD'
            formName='companyName'
          />
        </div>
        <div className='div2-wrapper-companyDetails'>
          <Label label='YOONIT Portal URL Link' />
          <Input
            value={mailServiceSettings.YOONITPortalURLLink}
            onChange={handleEmailServiceSettingsChange}
            label='https://yoonit-webportal.azurewebsites.net/'
            formName='YOONITPortalURLLink'
          />
        </div>
        <div className='div3-wrapper-companyDetails'>
          <Label label='Company Address' />
          <Input
            value={mailServiceSettings.companyAddress}
            onChange={handleEmailServiceSettingsChange}
            label='cyprus'
            formName='companyAddress'
          />
        </div>
        <div className='div4-wrapper-companyDetails'>
          <Label label='Company Phone' />
          <Input
            value={mailServiceSettings.companyPhone}
            onChange={handleEmailServiceSettingsChange}
            label='+(357) 25 025026'
            formName='companyPhone'
          />
        </div>
        <div className='div5-wrapper-companyDetails'>
          <Label label='Company Site' />
          <Input
            value={mailServiceSettings.companySite}
            onChange={handleEmailServiceSettingsChange}
            label='http://www.plugitapps.com/'
            formName='companySite'
          />
        </div>
      </div>
      <Button name='Save Changes' />

      {/* 3rd */}
      <Label label='Mail Service Settings' size={18.72} />
      <Button name='Test Mail' />
      <Label label='Host Name' />
      <Input
        value={mailServiceSettings.hostName}
        onChange={handleEmailServiceSettingsChange}
        label='smtp.office365.com'
        formName='hostName'
      />
      <Label label='Port' />
      <Input
        value={mailServiceSettings.port}
        onChange={handleEmailServiceSettingsChange}
        label='587'
        formName='port'
      />
      <Label label='Username' />
      <Input
        value={mailServiceSettings.username}
        onChange={handleEmailServiceSettingsChange}
        label='noreply@plugitapps.com'
        formName='Username'
      />
      <Label label='Back Office Email' />
      <Input
        value={mailServiceSettings.backOfficeEmail}
        onChange={handleEmailServiceSettingsChange}
        label='rita@plugitapps.com'
        formName='backOfficeEmail'
      />
      <Label label='Enable SSL' />
      <CheckBox />
      <Label label='Username (optional)' />
      <Input
        value={mailServiceSettings.usernameOptional}
        onChange={handleEmailServiceSettingsChange}
        label=''
        formName='usernameOptional'
      />
      <Label label='Display/Senders Name (optional)' />
      <Input
        value={mailServiceSettings.displaySendersNameOptional}
        onChange={handleEmailServiceSettingsChange}
        label='Yoonit PLG'
        formName='companyName'
      />
      <Button name='Save Changes' />
      {/* 4th */}
      <Label label='Platform Links' size={18.72} />
      <Input
        value={platformLinks}
        onChange={handlePlatformLinksChange}
        label='Live MT4'
      />
      <SpecialLinkIcon />
      <EditItemIcon />
      <Input
        value={platformLinks2}
        onChange={handlePlatformLinks2Change}
        label='LinkMT5'
      />
      <SpecialLinkIcon />
      <EditItemIcon />
      <AddItemIcon />
      {/* 5th */}
      <Label label='Registration Links' size={18.72} />
      <Input
        value={registrationLinks}
        onChange={handleRegistrationLinksChange}
        label='Test'
      />
      <SpecialLinkIcon />
      <EditItemIcon />
      <Input
        value={registrationLinks2}
        onChange={handleRegistrationLinks2Change}
        label='Google'
      />
      <SpecialLinkIcon />
      <EditItemIcon />
      <AddItemIcon />
    </>
  );
}

export default CompanySettings;

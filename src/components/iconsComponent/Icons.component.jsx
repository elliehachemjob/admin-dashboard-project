import React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PowerIcon from '@mui/icons-material/Power';
import LinkIcon from '@mui/icons-material/Link';
import PersonIcon from '@mui/icons-material/Person';
import CancelIcon from '@mui/icons-material/Cancel';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GavelIcon from '@mui/icons-material/Gavel';
import BuildIcon from '@mui/icons-material/Build';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import CameraFrontIcon from '@mui/icons-material/CameraFront';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CameraFrontOutlinedIcon from '@mui/icons-material/CameraFrontOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export function DeleteIconOutlinedIcon(props) {
  return (
    <DeleteOutlineOutlinedIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}
export function ForwardOutlinedIcon(props) {
  return (
    <ArrowForwardIosOutlinedIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function SelfieVerificationOutlinedIcon(props) {
  return (
    <CameraFrontOutlinedIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function EmailVerificationOutlinedIconIcon(props) {
  return (
    <EmailOutlinedIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}
export function SmsVerificationOutlinedIcon(props) {
  return (
    <SmsOutlinedIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function ProfileIconOutlined(props) {
  return (
    <PersonOutlineOutlinedIcon
      onMouseOver={props.onMouseOver}
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function DepositMoneyIcon(props) {
  return (
    <AttachMoneyIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function QuestionnaireIcon(props) {
  return (
    <QuestionAnswerIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function UploadDocumentIcon(props) {
  return (
    <FileUploadIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function SelfieVerificationIcon(props) {
  return (
    <CameraFrontIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}
export function EmailVerificationIcon(props) {
  return (
    <EmailIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function SMSVerificationIcon(props) {
  return (
    <SmsIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function AddressVerificationIcon(props) {
  return (
    <HomeIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function NewGoBackIcon(props) {
  return (
    <ArrowBackIosIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function InstructionsIcon(props) {
  return (
    <WbIncandescentIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function GoBackIcon(props) {
  return (
    <ReplyAllIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function PickIcon(props) {
  return (
    <TouchAppIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function SaveIcon(props) {
  return (
    <SaveAltIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}
export function CreateIcon(props) {
  return (
    <BuildIcon
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function ConditionsIcon(props) {
  return <GavelIcon className={props.className} onClick={props.onClick} />;
}

export function SpecialEditIcon(props) {
  return (
    <AutoAwesomeIcon className={props.className} onClick={props.onClick} />
  );
}

export function StackIcon(props) {
  return (
    <AutoAwesomeMotionIcon
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export function CorrectCircleIcon(props) {
  return <CheckCircleIcon className={props.className} />;
}

export function ClearIconTransparent(props) {
  return <ClearIcon className={props.className} />;
}

export function CorrectIcon(props) {
  return <CheckIcon className={props.className} />;
}

export function BlackCircleIcon(props) {
  return (
    <FiberManualRecordIcon className={props.className} sx={props.sx}>
      {props.children}
    </FiberManualRecordIcon>
  );
}

export function BellIcon(props) {
  return <NotificationsActiveIcon className={props.className} />;
}

export function DeleteItemIcon(props) {
  return <DeleteIcon className={props.className} onClick={props.onClick} />;
}

export function RefreshIcon(props) {
  return <RefreshOutlinedIcon className={props.className} />;
}

export function CopyItemIcon() {
  return <ContentCopyOutlinedIcon />;
}

export function AddItemIcon(props) {
  return <AddIcon style={props.style} />;
}

export function EditItemIcon() {
  return <ModeEditIcon />;
}

export function StatusIcon() {
  return <PowerIcon />;
}

export function SpecialLinkIcon() {
  return <LinkIcon />;
}

export function ProfileIcon(props) {
  return (
    <PersonIcon style={props.style} sx={props.sx} className={props.className} />
  );
}

export function CancelCircleIcon(props) {
  return <CancelIcon className={props.className} onClick={props.onClick} />;
}

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

export function AddItemIcon() {
  return <AddIcon />;
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
  return <PersonIcon sx={{ fontSize: 500 }} className={props.className} />;
}

export function CancelCircleIcon(props) {
  return <CancelIcon className={props.className} onClick={props.onClick} />;
}

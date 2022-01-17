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

export function BellIcon(props) {
  return <NotificationsActiveIcon className={props.className} />;
}

export function DeleteItemIcon(props) {
  return <DeleteIcon className={props.className} />;
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

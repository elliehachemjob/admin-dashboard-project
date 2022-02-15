import React from 'react';
import {
  FacebookOutlineIcon,
  SearchFilledIcon,
  AddressVerificationIcon,
  GroupsFilledIcon,
  CircularProfileOutlineIcon,
  DisplayOutlinedIcon,
  NotificationOutlinedWithPlusSignIcon,
  ScreenFilledIcon,
  AddItemIcon,
  PeopleIcon,
  PinIcon,
  FlagFilledIcon,
  AlbumIcon,
  HappySmileIcon,
  VideoAddFilledIcon,
  EventFilledIcon,
  StoredFilledIcon,
  PlayerFilledIcon,
  HistoryFilledIcon,
  MemoriesIcon,
  DropDownFilledIcon,
  ForwardOutlinedIcon,
  PlayArrowFilledIcon,
} from '../../components/iconsComponent/Icons.component';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import Input from '../../components/inputComponent/Input.component';
import BreakLine from '../../components/breakLineComponent/BreakLine.component';

import './facebook.styles.css';

function Facebook() {
  return (
    <>
      {/* 1st */}
      <FacebookOutlineIcon />
      <Input label='Search Facebook' />

      <SearchFilledIcon />
      {/* 2nd */}
      <AddressVerificationIcon />
      <PeopleIcon />
      <GroupsFilledIcon />
      {/* 3rd */}
      <Label label='Find friends' />
      <CircularProfileOutlineIcon />
      <DisplayOutlinedIcon />
      <span className='iconify' data-icon='mdi:facebook-messenger'></span>
      <NotificationOutlinedWithPlusSignIcon />
      <DropDownFilledIcon />
      {/* 4th */}
      <CircularProfileOutlineIcon />
      <Label label='Ellie Hachem' />
      <PeopleIcon />
      <Label label='Find Friends' />
      <FacebookOutlineIcon />
      <Label label='Welcome' />
      <GroupsFilledIcon />
      <Label label='Groups' />
      <StoredFilledIcon />
      <Label label='Marketplace' />
      <PlayerFilledIcon />
      <Label label='Watch' />
      <MemoriesIcon />
      <Label label='Memories' />
      <PinIcon />
      <Label label='Saved' />
      <FlagFilledIcon />
      <EventFilledIcon />
      <Label label='Events' />
      <HistoryFilledIcon />
      <Label label='Most Recent' />
      <ForwardOutlinedIcon />
      <Label label='See More' />
      {/* 5th */}
      <AddItemIcon />
      <Label label='Create Story' />
      <Label label='Share a photo or write something.' />
      {/* 6th */}
      <FacebookOutlineIcon />
      <ScreenFilledIcon />
      <Label label='Remember Password' />
      <Label
        label='Next time you log in on this browser, just click your profile picture
        instead of typing a password.'
      />
      <Button name='Okay' />
      <Button name='Not Now' />
      {/* 7th */}
      <CircularProfileOutlineIcon />
      <Input label='What is on your mind' />

      <BreakLine />
      <VideoAddFilledIcon />
      <Label label='Live Video' />
      <AlbumIcon />
      <Label label='Photo/Video' />
      <HappySmileIcon />
      <Label label='Feeling/Activity' />
      {/* 8th */}
      <Label label='No More Posts' />
      <Label label='Add more friends to see more posts in your News Feed' />
      <Button name='Find Friends' />
      {/* 9th */}
      <Label label='Group Conversations' />
      <AddItemIcon />
      <Label label='Create New Group' />
      {/* 10th */}
      <Label label='Privacy' />
      <Label label='⬤' />
      <Label label='Terms' />
      <Label label='⬤' />
      <Label label='Advertising' />
      <Label label='⬤' />
      <Label label='Add Choices' />
      <PlayArrowFilledIcon />
      <Label label='⬤' />
      <Label label='Cookies' />
      <Label label='⬤' />
      <Label label='More' />
      <Label label='⬤' />
      <Label label='©' />
      <Label label='2022' />
      {/* 11th */}
      <span className='iconify' data-icon='akar-icons:edit'></span>
    </>
  );
}

export default Facebook;

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
  ClearIconTransparent,
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FacebookOutlineIcon />
          <SearchFilledIcon />
          <Input label='Search Facebook' />
        </div>
        {/* 2nd */}
        <div style={{ display: 'flex' }}>
          <div style={{ paddingLeft: 30 }}>
            <AddressVerificationIcon />
          </div>
          <div style={{ paddingLeft: 30 }}>
            <PeopleIcon />
          </div>
          <div style={{ paddingLeft: 30 }}>
            <GroupsFilledIcon />
          </div>
        </div>
        {/* 3rd */}
        <div
          style={{
            display: 'flex',
          }}
        >
          <div style={{ paddingLeft: 10 }}>
            <Label label='Find friends' />
          </div>
          <div style={{ paddingLeft: 10 }}>
            <CircularProfileOutlineIcon />
          </div>
          <div style={{ paddingLeft: 10 }}>
            <DisplayOutlinedIcon />
          </div>
          <div style={{ paddingLeft: 10 }}>
            <span className='iconify' data-icon='mdi:facebook-messenger'></span>
          </div>
          <div style={{ paddingLeft: 10 }}>
            <NotificationOutlinedWithPlusSignIcon />
          </div>
          <div style={{ paddingLeft: 10 }}>
            <DropDownFilledIcon />
          </div>
        </div>
      </div>
      {/* 4th */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <CircularProfileOutlineIcon />
            <Label label='Ellie Hachem' />
          </div>
          <div style={{ display: 'flex' }}>
            <PeopleIcon />
            <Label label='Find Friends' />
          </div>
          <div style={{ display: 'flex' }}>
            <FacebookOutlineIcon />
            <Label label='Welcome' />
          </div>
          <div style={{ display: 'flex' }}>
            <GroupsFilledIcon />
            <Label label='Groups' />
          </div>
          <div style={{ display: 'flex' }}>
            <StoredFilledIcon />
            <Label label='Marketplace' />
          </div>
          <div style={{ display: 'flex' }}>
            <PlayerFilledIcon />
            <Label label='Watch' />
          </div>
          <div style={{ display: 'flex' }}>
            <MemoriesIcon />
            <Label label='Memories' />
          </div>
          <div style={{ display: 'flex' }}>
            <PinIcon />
            <Label label='Saved' />
          </div>
          <div style={{ display: 'flex' }}>
            <FlagFilledIcon />
            <Label label='Pages' />
          </div>
          <div style={{ display: 'flex' }}>
            <EventFilledIcon />
            <Label label='Events' />
          </div>
          <div style={{ display: 'flex' }}>
            <HistoryFilledIcon />
            <Label label='Most Recent' />
          </div>
          <div style={{ display: 'flex' }}>
            <ForwardOutlinedIcon />
            <Label label='See More' />
          </div>
        </div>
        {/* 5th */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <div>
              <AddItemIcon />
            </div>
            <div>
              <Label label='Create Story' />
              <Label label='Share a photo or write something.' />
            </div>
          </div>
          {/* 6th */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FacebookOutlineIcon />
            <ScreenFilledIcon />
            <ClearIconTransparent />
          </div>
          <Label label='Remember Password' />
          <Label
            label='Next time you log in on this browser, just click your profile picture
        instead of typing a password.'
          />
          <div style={{ display: 'flex' }}>
            <Button name='Okay' />
            <Button name='Not Now' />
          </div>

          {/* 7th */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CircularProfileOutlineIcon />
            <Input label='What is on your mind' />
          </div>
          <BreakLine />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <div style={{ display: 'flex' }}>
              <VideoAddFilledIcon />
              <Label label='Live Video' />
            </div>
            <div style={{ display: 'flex' }}>
              <AlbumIcon />
              <Label label='Photo/Video' />
            </div>
            <div style={{ display: 'flex' }}>
              <HappySmileIcon />
              <Label label='Feeling/Activity' />
            </div>
          </div>
          {/* 8th */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Label label='No More Posts' />
            <Label label='Add more friends to see more posts in your News Feed' />
            <Button name='Find Friends' />
          </div>
        </div>
        {/* 9th */}
        <div>
          <Label label='Group Conversations' />
          <div style={{ display: 'flex' }}>
            <AddItemIcon />
            <Label label='Create New Group' />
          </div>
        </div>
      </div>
      {/* 10th */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: 200,
        }}
      >
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
      </div>

      {/* 11th */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <span className='iconify' data-icon='akar-icons:edit'></span>
      </div>
    </>
  );
}

export default Facebook;

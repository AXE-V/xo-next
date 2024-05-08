'use client';
import { LuHome, LuLogOut, LuSearch, LuSwords, LuTrophy, LuUsers } from 'react-icons/lu';
// import { Card } from '../card';
import React, { useEffect, useRef, useState } from 'react';
import { PANEL_BUTTONS, renderControlPanel, users } from './data';
import { BadgeProps, Divider, Input, Listbox, ListboxItem, Tab, Tabs } from '@nextui-org/react';
import { Card } from '../card';
import clsx from 'clsx';
import { UserCardData } from '@/types';
import { SegmentUsers } from './components/segment-users';
import { Button } from '../button';

export const ControlPanel = () => {
  return (
    <>
      <section className="flex">
        <div className="flex flex-col justify-between bg-background px-4 pt-4 pb-6">
          {/* <div className="flex flex-col gap-4">{renderControlPanel(PANEL_BUTTONS)}</div> */}
          <div className="flex flex-col gap-4">
            <Button
              btnProps={{ isIconOnly: true }}
              toolTip={{ content: 'Home', placement: 'right' }}>
              <LuHome size={22} />
            </Button>
            <Button
              btnProps={{ isIconOnly: true }}
              toolTip={{ content: 'Arena', placement: 'right' }}>
              <LuSwords size={22} />
            </Button>

            <Button
              btnProps={{ isIconOnly: true }}
              toolTip={{ content: 'Leaders', placement: 'right' }}>
              <LuTrophy size={22} />
            </Button>
            <Divider />
            <Button
              btnProps={{ isIconOnly: true }}
              toolTip={{ content: 'users', placement: 'right' }}>
              <LuUsers size={22} />
            </Button>
          </div>
        </div>
        <SegmentUsers />
      </section>
    </>
  );
};

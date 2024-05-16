'use client';
import { LuHome, LuLogOut, LuSearch, LuSwords, LuTrophy, LuUsers } from 'react-icons/lu';
// import { Card } from '../card';
import React, { useEffect, useRef, useState } from 'react';
import { PANEL_BUTTONS, renderControlPanel, users } from './data';
import { BadgeProps, Divider, Input, Listbox, ListboxItem, Tab, Tabs } from '@nextui-org/react';

import { SegmentUsers } from '../segments/users/segment-users';
import { CButton } from '../lib/button';
import { useRouter } from 'next/router';

export const ControlPanel = () => {
  return (
    <>
      <section className="flex flex-col gap-4 px-4 py-4">
        {renderControlPanel(PANEL_BUTTONS)}
        <Divider />
        <CButton
          btnProps={{ isIconOnly: true, className: `bg-background-50` }}
          toolTip={{ content: 'users', placement: 'right' }}>
          <LuUsers size={22} />
        </CButton>
      </section>
    </>
  );
};

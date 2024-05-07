import { LuLogOut, LuSearch } from 'react-icons/lu';
// import { Card } from '../card';
import React, { useEffect, useRef, useState } from 'react';
import { PANEL_BUTTONS, renderControlPanel, users } from './data';
import { BadgeProps, Input, Listbox, ListboxItem } from '@nextui-org/react';
import { Card } from '../card';
import clsx from 'clsx';
import { UserCardData } from '@/types';
import { SegmentUsers } from './components/segment-users';
import { Button } from '../button';

export const ControlPanel = () => {
  return (
    <section className="flex">
      <div className="flex flex-col justify-between pr-4 pl-5">
        <div className="flex flex-col gap-4 ">{renderControlPanel(PANEL_BUTTONS)}</div>
        <Button btnProps={{ isIconOnly: true }}>
          <LuLogOut size={22} />
        </Button>
      </div>
      <SegmentUsers />
    </section>
  );
};

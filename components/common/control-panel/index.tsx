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
      <div className="flex flex-col justify-between bg-background px-4 pt-5">
        <div className="flex flex-col gap-4">{renderControlPanel(PANEL_BUTTONS)}</div>
        <Button
          btnProps={{ isIconOnly: true, className: `bg-background-100` }}
          toolTip={{
            content: 'logout',
            placement: 'right',
            color: `foreground`,
            radius: 'sm',
            classNames: { base: `font-medium` },
          }}>
          <LuLogOut size={22} />
        </Button>
      </div>
      <SegmentUsers />
    </section>
  );
};

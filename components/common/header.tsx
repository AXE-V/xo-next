'use client';
import { LuBell } from 'react-icons/lu';
import { Metadata } from 'next';
import { NextUILogo } from '../icons';
import { Button } from './button';
import { useState } from 'react';
import { ThemeSelect } from './theme-select';
import { Tooltip, Badge, Avatar, Button as NextButton } from '@nextui-org/react';

type Props = {
  name: string;
  metadata?: Metadata;
};

export const Header = ({ name, metadata }: Props) => {
  const [bellIsOpen, setBellIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center p-5 bg-background-300">
      <NextUILogo height={36} />
      <div className="flex gap-8">
        <div className="flex gap-4 items-center">
          {/* <ThemeSwitch /> */}
          <ThemeSelect />
          <Button
            // state={{ setStateVal: () => setBellIsOpen(!bellIsOpen) }}
            key={'bell'}
            badge={{ size: 'md', color: 'secondary', content: '5', children: this }}
            toolTip={{
              content: 'Messages',
              color: 'foreground',
              radius: 'sm',
            }}
            btnProps={{ className: `bg-background-100`, isIconOnly: true }}
            Icon={<LuBell size={22} />}
          />
        </div>
        <div className="flex items-center gap-4">
          {name}
          <Badge content={''} color="success">
            <Avatar src="https://i.pinimg.com/564x/4b/21/fd/4b21fd25014149c5b1511301ffb54396.jpg" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

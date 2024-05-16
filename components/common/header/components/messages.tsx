'use client';
import React, { useState } from 'react';
import { CButton } from '../../lib/button';
import { LuBell } from 'react-icons/lu';
import { User } from '@supabase/supabase-js';

type Props = {
  user?: User | null;
};

export default function UserMessages({ user }: Props) {
  const [messagesIsOpen, setMessagesIsOpen] = useState(false);

  return (
    <CButton
      // state={{ setStateVal: () => setBellIsOpen(!bellIsOpen) }}
      key={'bell'}
      badge={{ size: 'md', color: 'secondary', content: '5', children: <></> }}
      toolTip={{
        content: 'Messages',
        color: 'foreground',
        radius: 'sm',
      }}
      btnProps={{ className: `bg-background-50`, isIconOnly: true }}
      Icon={<LuBell size={22} />}
    />
  );
}

'use client';
import { ListboxConfig } from '@/components/common/lib/listBox/types';
import { SwitchTemplate } from '@/components/common/lib/switch/template';
import { lbDefaultClassNames } from '@/components/primitives';
import { State } from '@/types';
import { ListboxItemProps } from '@nextui-org/react';
import { useState } from 'react';
import { LuBan, LuUndoDot, LuUserMinus2 } from 'react-icons/lu';

export const useUsersMenu = () => {
  // Activity
  const [onlyFriends, setOnlyFriends] = useState(true);
  const [online, setOnline] = useState(true);
  const [blacklisted, setBlacklisted] = useState(false);
  const [expectation, setExpectation] = useState(false);

  // Actions

  const lbData: ListboxConfig = {
    sections: [
      {
        title: 'Activity',
        items: [
          {
            children: 'Only Friends',
            value: 'Only Friends',
            key: 'Only Friends',
            onClick: () => setOnlyFriends(!onlyFriends),
            stateVal: onlyFriends,
          },
          {
            children: 'Online',
            value: 'Online',
            key: 'Online',
            onClick: () => setOnline(!online),
            stateVal: online,
          },
          {
            children: 'Blacklisted',
            value: 'Blacklisted',
            key: 'Blacklisted',
            onClick: () => setBlacklisted(!blacklisted),
            stateVal: blacklisted,
          },
          {
            children: 'Expectation',
            value: 'Expectation',
            key: 'Expectation',
            onClick: () => setExpectation(!expectation),
            stateVal: expectation,
          },
        ],
        template: ({ children, stateVal }: ListboxItemProps & State) => (
          <SwitchTemplate switchProps={{ isSelected: stateVal }}>{children}</SwitchTemplate>
        ),
      },
      {
        title: 'Actions',
        items: [
          {
            children: 'Add to blacklist',
            value: 'Add to blacklist',
            key: 'Add to blacklist',
            description: 'You will not receive notifications from selected user',
            startContent: <LuBan size={22} />,
          },
          {
            children: 'Return from blacklist',
            value: 'Return from blacklist',
            key: 'Return from blacklist',
            description: 'Returns selected users from your blocklist',
            startContent: <LuUndoDot size={22} />,
          },
          {
            children: 'Remove users',
            value: 'Remove users',
            key: 'Remove users',
            description: 'Remove selected users from your list',
            startContent: <LuUserMinus2 size={22} />,
          },
        ],
      },
    ],
    classNames: lbDefaultClassNames,
  };

  return {
    lbData,
    onlyFriends,
    setOnlyFriends,
    online,
    setOnline,
    blacklisted,
    setBlacklisted,
    expectation,
    setExpectation,
  };
};

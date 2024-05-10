'use client';
import {
  Avatar,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Card as NextCard,
  Tab,
  Tabs,
} from '@nextui-org/react';
import { Suspense, useEffect, useState } from 'react';
import { LuSend } from 'react-icons/lu';

const users = [
  {
    key: 't1',
    tabLabel: 'Mike Vilani',
    chat: {
      you: [
        { order: 1, value: 'Hello' },
        { order: 4, value: 'Ok, then i am for X' },
      ],
      opponent: [
        { order: 2, value: 'Hi' },
        { order: 3, value: 'i will play for O' },
      ],
    },
  },
  {
    key: 't2',
    tabLabel: 'Salvador Mechete',
    chat: {
      you: [
        { order: 1, value: 'i wanna O' },
        { order: 3, value: 'ok' },
      ],
      opponent: [
        { order: 2, value: 'but...' },
        { order: 4, value: 'i am X' },
      ],
    },
  },
];

export const SegmentChat = () => {
  const [tabs, setTabs] = useState<any[]>([]);
  const [tabToClose, setTabToClose] = useState('');
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setTabs(users);
  }, []);

  useEffect(() => {
    document.getElementById(tabToClose)?.remove();
    // document.querySelector(`.${tabToClose}`)?.remove();
  }, [tabToClose]);

  return (
    <>
      <NextCard classNames={{ base: `grid grid-rows-[min-content,1fr] min-w-[400px] shadow-none` }}>
        <CardHeader className={`flex gap-1 p-2 overflow-x-scroll`}>
          <Suspense fallback={'Loading...'}>
            {tabs.map((user, i) => (
              <Chip
                id={user.key}
                key={user.tabLabel}
                classNames={{
                  base: `border-background`,
                  content: `pointer-events-none`,
                  closeButton: 'text-foreground',
                }}
                variant="faded"
                color="primary"
                radius="sm"
                onClose={() => setTabToClose(user.key)}>
                {user.tabLabel}
              </Chip>
            ))}
          </Suspense>
        </CardHeader>
        <CardBody className="grid grid-rows-[1fr,min-content]">
          <div className="flex flex-col justify-end">
            <div className={`bg-background-100 rounded-tr-xl p-4 size-max self-start`}>
              opponent Message
            </div>
            <div className={`bg-background-100 rounded-tl-xl p-4 size-max self-end`}>
              my Message
            </div>
          </div>
          <Input classNames={{ base: `pt-2` }} endContent={<LuSend size={22} />}></Input>
        </CardBody>
      </NextCard>
    </>
  );
};

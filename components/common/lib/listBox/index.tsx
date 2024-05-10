'use client';
import { State } from '@/types';
import {
  Card,
  CardBody,
  Listbox,
  ListboxItem,
  ListboxItemProps,
  ListboxSection,
  Switch,
  Button,
} from '@nextui-org/react';
import clsx from 'clsx';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { Key, ReactNode, useRef, useState } from 'react';
import { LuBan, LuUndoDot, LuUserMinus2 } from 'react-icons/lu';
import { ListboxConfig } from './types';
import { ListboxTemplate } from './template';
import { SwitchTemplate } from '../switch/template';

const lbActivity: (ListboxItemProps & State)[] = [
  {
    key: 'Only Friends',
    children: <>Only Friends</>,
    onClick: () => {},
    stateVal: {},
  },
  {
    key: 'Online',
    children: <>Online</>,
    onClick: () => {},
    stateVal: {},
  },
  {
    key: 'Blacklisted',
    children: <>Blacklisted</>,
    onClick: () => {},
    stateVal: {},
  },
  {
    key: 'Expectation',
    children: <>Expectation</>,
    onClick: () => {},
    stateVal: {},
  },
];

const lbActions: ListboxItemProps[] = [
  {
    key: 'Add to blacklist',
    children: <>Add to blacklist</>,
    description: <>You will not receive notifications from selected user</>,
    startContent: <LuBan size={22} />,
  },
  {
    key: 'Return from blacklist',
    children: <>Return from blacklist</>,
    description: <>Returns selected users from your blocklist</>,
    startContent: <LuUndoDot size={22} />,
  },
  {
    key: 'Remove users',
    children: <>Remove users</>,
    description: <>Remove selected users from your list</>,
    startContent: <LuUserMinus2 size={22} />,
  },
];

export const CListbox = ({ isOpen, lbData }: { isOpen: boolean; lbData: ListboxConfig }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 10 }}
          exit={{ opacity: 0, y: 0 }}
          className={clsx(`absolute z-20 right-0`)}>
          <Card
            classNames={{
              base: clsx(`bg-background-100 border-secondary/75 border-2`),
              body: `bg-background`,
            }}>
            <CardBody className={`flex flex-col gap-y-2`}>{ListboxTemplate(lbData)}</CardBody>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

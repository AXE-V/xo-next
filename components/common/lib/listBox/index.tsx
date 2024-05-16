// 'use client';
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

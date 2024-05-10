'use client';
import { LuBell } from 'react-icons/lu';
import { Metadata } from 'next';
import { NextUILogo } from '../../icons';

import { useState } from 'react';
import { ThemeSelect } from '../theme-select';
import {
  Tooltip,
  Badge,
  Avatar,
  Button as NextButton,
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardBody,
  Card,
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import { CButton } from '../lib/button';
import { CListbox } from '../lib/listBox';
import { useUserMenu } from './hooks/useUserMenu';

type Props = {
  name: string;
  metadata?: Metadata;
};

export const Header = ({ name, metadata }: Props) => {
  const {
    lbData,
    isRules,
    setIsRules,
    isLogout,
    setIsLogout,
    CModal,
    onClose,
    onOpen,
    onOpenChange,
  } = useUserMenu();
  const [bellIsOpen, setBellIsOpen] = useState(false);
  const [userOptionsIsOpen, setUserOptionsIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-5 px-5 bg-background">
      <NextUILogo height={37} />
      <div className="flex gap-8">
        <div className="flex gap-4 items-center">
          {/* <ThemeSwitch /> */}
          <ThemeSelect />
          <CButton
            // state={{ setStateVal: () => setBellIsOpen(!bellIsOpen) }}
            key={'bell'}
            badge={{ size: 'md', color: 'secondary', content: '5', children: this }}
            toolTip={{
              content: 'Messages',
              color: 'foreground',
              radius: 'sm',
            }}
            btnProps={{ className: `bg-background-50`, isIconOnly: true }}
            Icon={<LuBell size={22} />}
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            {name}
            <span className="text-xs">Rank 1</span>
          </div>
          <div className="relative">
            <Badge content={''} color="success">
              <Avatar
                onClick={() => setUserOptionsIsOpen(!userOptionsIsOpen)}
                src="https://i.pinimg.com/564x/4b/21/fd/4b21fd25014149c5b1511301ffb54396.jpg"
              />
            </Badge>
            <CListbox isOpen={userOptionsIsOpen} lbData={lbData} />
            <CModal isOpen={isRules} onOpenChange={onOpenChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

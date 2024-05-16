'use client';
import {
  Avatar,
  Badge,
  Button as NextButton,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { CListbox } from '../../lib/listBox';
import { useUserMenu } from '../hooks/useUserMenu';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { ListboxConfig } from '../../lib/listBox/types';
import { ModalConfig, ModalTemplate } from '../../lib/modal/template';
import { userRequsts } from '@/utils/supabase/requests';

export default function UserAvatar({ user }: { user: User | null }) {
  const { lbData, setUserOptionsIsOpen, userOptionsIsOpen, userStatus } = useUserMenu();

  // const nickname = userRequsts.getNickname();
  // console.log(nickname);

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col">{user?.email ?? 'Anonymous'}</div>
      <div className="relative">
        <Badge content={''} color={user ? userStatus?.color : 'default'}>
          <Avatar
            onClick={() => setUserOptionsIsOpen(!userOptionsIsOpen)}
            src="https://i.pinimg.com/564x/4b/21/fd/4b21fd25014149c5b1511301ffb54396.jpg"
          />
        </Badge>
        <CListbox isOpen={userOptionsIsOpen} lbData={lbData} />
      </div>
    </div>
  );
}

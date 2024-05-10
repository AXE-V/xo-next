'use client';
import { lbdefaultClassNames } from '@/components/primitives';
import React, { useState } from 'react';
import { ListboxConfig } from '../../lib/listBox/types';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  useDisclosure,
} from '@nextui-org/react';

type Props = {
  isOpen: boolean;
  onOpenChange: any;
};

const CModal = ({ isOpen, onOpenChange }: Props) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader></ModalHeader>
            <ModalBody></ModalBody>
            <ModalFooter>
              <div onClick={onClose}>close</div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export const useUserMenu = () => {
  const [isRules, setIsRules] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const { onClose, onOpen, onOpenChange } = useDisclosure();

  const lbData: ListboxConfig = {
    sections: [
      {
        title: 'Shared',
        items: [
          {
            children: 'Rules',
            value: 'Rules',
            key: 'Rules',
            onClick: () => setIsRules(!isRules),
            stateVal: isRules,
          },
          {
            children: 'Logout',
            value: 'Logout',
            key: 'Logout',
            onClick: () => setIsLogout(!isLogout),
            stateVal: isLogout,
          },
        ],
      },
    ],
    classNames: lbdefaultClassNames,
  };

  return {
    CModal,
    lbData,
    isRules,
    setIsRules,
    isLogout,
    setIsLogout,
    onClose,
    onOpen,
    onOpenChange,
  };
};

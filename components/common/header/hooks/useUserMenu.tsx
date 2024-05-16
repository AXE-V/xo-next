'use client';
import { useState } from 'react';

import { lbDefaultClassNames } from '@/components/primitives';
import { ListboxConfig } from '../../lib/listBox/types';
import { useDisclosure } from '@nextui-org/react';
import { signOut } from '@/app/login/actions';
import { ModalTemplate } from '../../lib/modal/template';
import { ModalConfig } from '../../lib/modal/template';
import { UserStatus } from '@/types';

export const useUserMenu = () => {
  const [userStatus, setUserStatus] = useState<UserStatus>({
    activity: 'online',
    color: 'success',
  });
  const [userOptionsIsOpen, setUserOptionsIsOpen] = useState(false);
  const [isRules, setIsRules] = useState(false);
  const rulesModal = useDisclosure();

  const onlineStatus = () => {
    setUserStatus({ activity: 'online', color: 'success' });
    setUserOptionsIsOpen(!userOptionsIsOpen);
  };
  const offlineStatus = () => {
    setUserStatus({ activity: 'offline', color: 'default' });
    setUserOptionsIsOpen(!userOptionsIsOpen);
  };
  const notActiveStatus = () => {
    setUserStatus({ activity: 'not active', color: 'warning' });
    setUserOptionsIsOpen(!userOptionsIsOpen);
  };
  const notDisturbStatus = () => {
    setUserStatus({ activity: 'not disturb', color: 'danger' });
    setUserOptionsIsOpen(!userOptionsIsOpen);
  };

  // lbConfig
  const lbData: ListboxConfig = {
    sections: [
      {
        title: 'Activity',
        items: [
          { children: <>Online</>, value: 'Online', key: 'Online', onClick: onlineStatus },
          { children: <>Offline</>, value: 'Offline', key: 'Offline', onClick: offlineStatus },
          {
            children: <>Not Active</>,
            value: 'Not Active',
            key: 'Not Active',
            onClick: notActiveStatus,
          },
          {
            children: <>Not Disturb</>,
            value: 'Not Disturb',
            key: 'Not Disturb',
            onClick: notDisturbStatus,
          },
        ],
      },
      {
        title: 'Shared',
        items: [
          {
            children: <span onClick={rulesModal.onOpen}>Rules</span>,
            value: 'Rules',
            key: 'Rules',
            onClick: () => setIsRules(!isRules),
            stateVal: isRules,
            ownTemplate: ({ children }) => (
              <ModalTemplate modalConfig={rulesModalConfig}>{children}</ModalTemplate>
            ),
          },
          {
            children: (
              <form action={signOut}>
                <label>
                  <button
                    onClick={() => setUserOptionsIsOpen(!userOptionsIsOpen)}
                    type="submit"
                    hidden
                  />
                  Logout
                </label>
              </form>
            ),
            value: 'Logout',
            key: 'Logout',
          },
        ],
      },
    ],
    classNames: lbDefaultClassNames,
  };

  // ModalConfig
  const rulesModalConfig: ModalConfig = {
    modal: { onOpenChange: rulesModal.onOpenChange, isOpen: rulesModal.isOpen, children: <></> },
    header: { children: <>Game rules</> },
    body: {
      children: (
        <>
          One player moves with crosses, and the other plays with zeros. The first one to line up 3
          of his pieces vertically, horizontally or diagonally wins. The first move is made by the
          player placing crosses.
        </>
      ),
    },
    footer: {
      children: <>close</>,
    },
  };

  return { userStatus, userOptionsIsOpen, setUserOptionsIsOpen, lbData };
};

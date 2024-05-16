import React, { ReactNode } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalBodyProps,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalFooterProps,
  ModalHeader,
  ModalHeaderProps,
  ModalProps,
  useDisclosure,
} from '@nextui-org/react';

interface Props {
  children: ReactNode;
  modalConfig?: ModalConfig;
}
export type ModalConfig = {
  modal?: ModalProps;
  content?: ModalContentProps;
  header?: ModalHeaderProps;
  body?: ModalBodyProps;
  footer?: ModalFooterProps;
};

export function ModalTemplate({ children, modalConfig }: Props) {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <div onClick={onOpen}>
      {children}
      <Modal {...modalConfig?.modal} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent {...modalConfig?.content}>
          {(onClose) => (
            <>
              <ModalHeader {...modalConfig?.header}>{modalConfig?.header?.children}</ModalHeader>
              <ModalBody {...modalConfig?.body}>{modalConfig?.body?.children}</ModalBody>
              <ModalFooter {...modalConfig?.footer}>
                <Button variant="flat" color="secondary" onClick={onClose}>
                  {modalConfig?.footer?.children}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

// example
// const modalData: ModalConfig = {
//   header: { children: <>Header</> },
//   body: { children: <>Body</> },
//   footer: { children: <>Footer</> },
// };

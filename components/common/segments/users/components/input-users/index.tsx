'use client';
import { Input } from '@nextui-org/react';
import { SyntheticEvent, useRef, useState } from 'react';
import { LuSearch, LuSliders } from 'react-icons/lu';
import clsx from 'clsx';
import { State } from '@/types';
import { CButton } from '@/components/common/lib/button';
import { CListbox } from '@/components/common/lib/listBox';
import { useUsersMenu } from './hooks/useUsersMenu';

export const InputUsers = ({ setStateVal, stateVal }: State) => {
  const { lbData } = useUsersMenu();
  const inputRef = useRef(null);
  const [focusInput, setFocusInput] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onChange = (e: SyntheticEvent<EventTarget>) => {
    setStateVal?.((e.target as HTMLInputElement).value);
  };

  return (
    <Input
      className="w-[400px] px-0 mr-5"
      ref={inputRef}
      value={stateVal}
      onChange={onChange}
      onFocusChange={() => setFocusInput(!focusInput)}
      endContent={
        <div className="relative">
          <CButton
            toolTip={{
              content: 'Options',
              color: 'foreground',
              radius: 'sm',
              classNames: { base: `font-medium` },
            }}
            btnProps={{
              onClick: () => setMenuIsOpen(!menuIsOpen),
              isIconOnly: true,
              className: clsx(
                `data-[hover=true]:bg-transparent, text-background-200`,
                focusInput ? 'text-foreground' : void 0,
              ),
            }}>
            <LuSliders size={22} />
          </CButton>
          <CListbox lbData={lbData} isOpen={menuIsOpen} />
        </div>
      }
      startContent={<LuSearch size={22} strokeWidth={2.3} />}
      variant={`${focusInput ? 'bordered' : 'flat'}`}
      color="secondary"
      labelPlacement="inside"
      classNames={{
        base: `px-4 mb-2`,
        input: `font-medium text-lg`,
        inputWrapper: `text-background-200 data-[focus=true]:dark:text-primary data-[focus=true]:dark:border-secondary/75 w-400`,
      }}
    />
  );
};

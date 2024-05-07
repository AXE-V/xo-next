'use client';
import {
  Button as NextButton,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Tab,
  Tabs,
  Tooltip,
  Card,
  CardBody,
  Listbox,
  ListboxSection,
  ListboxItem,
} from '@nextui-org/react';
import { SyntheticEvent, useRef, useState } from 'react';
import { LuSearch, LuSliders } from 'react-icons/lu';
import { Button } from '../../../button';
import clsx from 'clsx';
import { State } from '@/types';
import { motion, Variants } from 'framer-motion';
import { BtnInputOptions } from './components/btn-input-options';

export const InputUsers = ({ setStateVal, stateVal }: State) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [focusInput, setFocusInput] = useState(false);

  const onChange = (e: SyntheticEvent<EventTarget>) => {
    setInputValue((e.target as HTMLInputElement).value);
    setStateVal?.((e.target as HTMLInputElement).value);
  };

  return (
    <Input
      ref={inputRef}
      value={inputValue}
      onChange={onChange}
      onFocusChange={() => setFocusInput(!focusInput)}
      endContent={<BtnInputOptions focus={focusInput} />}
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

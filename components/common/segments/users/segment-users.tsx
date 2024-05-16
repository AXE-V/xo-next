'use client';
import { Input, Listbox } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { LuSearch, LuSliders } from 'react-icons/lu';

import { UserCardData } from '@/types';
import styles from './style.module.scss';
import { users } from '../../control-panel/data';
import { CCard } from '../../lib/card';
import { InputUsers } from './components/input-users';

export const SegmentUsers = () => {
  const [inputOptions, setInputOptions] = useState({});
  const [selectedCard, setSelectedCard] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(selectedCard);
  }, [selectedCard]);

  return (
    <div className="flex-col flex overflow-hidden">
      <InputUsers setStateVal={setInputValue} stateVal={inputValue} />
      <div className={'flex flex-col gap-2 pr-2 overflow-y-auto'}>
        {users
          .filter((user) => user.nickName?.toLowerCase().includes(inputValue.toLowerCase()))
          .map((user) => (
            <CCard
              key={user.id}
              {...user}
              id={user.id}
              setStateVal={setSelectedCard}
              stateVal={selectedCard}
            />
          ))}
      </div>
    </div>
  );
};

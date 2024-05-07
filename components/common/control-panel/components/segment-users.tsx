'use client';
import { Input, Listbox } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { LuSearch, LuSliders } from 'react-icons/lu';
import { users } from '../data';
import { Card } from '../../card';
import { Button } from '../../button';
import { InputUsers } from './input-users';
import { UserCardData } from '@/types';

export const SegmentUsers = () => {
  const [inputOptions, setInputOptions] = useState({});
  const [selectedCard, setSelectedCard] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(selectedCard);
  }, [selectedCard]);

  return (
    <div className="flex flex-col gap-2 pt-5 bg-background-200 rounded-tl-2xl">
      <InputUsers setStateVal={setInputValue} />
      <div className={`flex px-4 pb-4 pt-4 flex-col gap-2 overflow-y-auto scrollbar-hide`}>
        {users
          .filter((user) => user.nickName?.includes(inputValue))
          .map((user) => (
            <Card
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

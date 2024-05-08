'use client';
import { Input, Listbox } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { LuSearch, LuSliders } from 'react-icons/lu';
import { users } from '../data';
import { Card } from '../../card';
import { Button } from '../../button';
import { InputUsers } from './input-users';
import { UserCardData } from '@/types';
import styles from './style.module.scss';

export const SegmentUsers = () => {
  const [inputOptions, setInputOptions] = useState({});
  const [selectedCard, setSelectedCard] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(selectedCard);
  }, [selectedCard]);

  return (
    <div className={styles.usersMainWrapper}>
      <InputUsers setStateVal={setInputValue} />
      <div className={styles.usersContainerWrapper}>
        <div className={styles.usersContainer}>
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
    </div>
  );
};

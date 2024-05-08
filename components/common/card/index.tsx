'use client';
import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as NextCard,
  Avatar,
  Button as NextButton,
  Badge,
  Checkbox,
  ListboxItem,
} from '@nextui-org/react';
import { LuUserMinus, LuUserPlus, LuSend, LuSendHorizonal, LuMailCheck } from 'react-icons/lu';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Button } from '../button';
import { SlotInfo } from './slot-info';
import { State, UserCardData } from '@/types';

export const Card = ({
  nickName,
  label,
  status,
  imageUrl,
  setStateVal,
  stateVal,
  id,
}: UserCardData & State<string[]>) => {
  const [invited, setInvited] = useState(false);
  // const [checked, setChecked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const cardHeader = cardRef.current?.querySelector('.cardHeader');
    // if (cardHeader) {
    //   stateVal?.includes(id);
    // }
  }, [stateVal]);

  const onClickCard = () => {
    if (!stateVal?.includes(id)) {
      setStateVal?.((prev) => [...prev, id]);
    } else {
      setStateVal?.((prev) => prev.filter((card) => card !== id));
    }
  };

  return (
    <>
      <NextCard
        aria-labelledby="card-user"
        ref={cardRef}
        classNames={{
          header: [
            `border-2 border-transparent transition-all rounded-2xl ${
              status?.activity === 'offline'
                ? void 0
                : 'hover:border-secondary hover:border-opacity-75'
            }`,
          ],
          base: [`shrink-0 w-[400px] rounded-2xl cursor-default shadow-none bg-background`],
        }}
        isDisabled={status?.activity === 'offline' ? true : false}>
        <CardHeader className={`cardHeader flex justify-between`} onClick={onClickCard}>
          <Badge color={status?.color} content="">
            <Avatar
              isDisabled={status?.activity === 'offline' ? true : false}
              className={`flex-shrink-0`}
              color="default"
              size="md"
              src={imageUrl}
            />
          </Badge>
          <SlotInfo nickName={nickName} label={label} checked={{ value: stateVal?.includes(id) }} />
          <Button
            btnProps={{
              startContent: invited ? <LuMailCheck size={22} /> : <LuSend size={22} />,
              variant: 'flat',
              color: `${invited ? 'warning' : 'secondary'}`,
              onClick: () => setInvited(!invited),
              isDisabled: status?.activity === 'offline' ? true : false,
              className: `w-28`,
            }}>
            {invited ? 'Invited' : 'Invite'}
          </Button>
        </CardHeader>
      </NextCard>
    </>
  );
};

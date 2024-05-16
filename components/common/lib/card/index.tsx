'use client';
import {
  CardBody,
  CardFooter,
  CardHeader,
  Card,
  Avatar,
  Button,
  Badge,
  Checkbox,
  ListboxItem,
} from '@nextui-org/react';
import { LuUserMinus, LuUserPlus, LuSend, LuSendHorizonal, LuMailCheck } from 'react-icons/lu';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { CButton } from '../button';
import { SlotInfo } from './slot-info';
import { State, UserCardData } from '@/types';

export const CCard = ({
  nickName,
  label,
  status,
  imageUrl,
  setStateVal,
  stateVal,
  id,
}: UserCardData & State<string[]>) => {
  const [invited, setInvited] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, [stateVal]);

  const onClickCard = () => {
    if (!stateVal?.includes(id)) {
      setStateVal?.((prev) => [...prev, id]);
    } else {
      setStateVal?.((prev) => prev.filter((card) => card !== id));
    }
  };

  return (
    <>
      <Card
        aria-labelledby="card-user"
        ref={cardRef}
        className=""
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
          <CButton
            btnProps={{
              startContent: invited ? <LuMailCheck size={22} /> : <LuSend size={22} />,
              variant: 'flat',
              color: `${invited ? 'warning' : 'secondary'}`,
              onClick: () => setInvited(!invited),
              isDisabled: status?.activity === 'offline' ? true : false,
              className: `w-28`,
            }}>
            {invited ? 'Invited' : 'Invite'}
          </CButton>
        </CardHeader>
      </Card>
    </>
  );
};

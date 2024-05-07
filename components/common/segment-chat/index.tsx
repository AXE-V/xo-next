'use client';
import {
  Avatar,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Card as NextCard,
  Tab,
  Tabs,
} from '@nextui-org/react';
import { LuSend } from 'react-icons/lu';

export const SegmentChat = () => {
  return (
    <NextCard classNames={{ base: `grid grid-rows-[max-content,1fr] min-w-[400px]` }}>
      <CardHeader className={`flex gap-1 overflow-x-scroll`}>
        {[...new Array(16)].map((_, i) => (
          <Chip
            key={i}
            classNames={{
              base: `border-background`,
              content: `pointer-events-none`,
              closeButton: 'text-primary',
            }}
            variant="dot"
            radius="sm"
            onClose={() => console.log('close')}>
            user {i}
          </Chip>
        ))}
      </CardHeader>
      <CardBody>
        <div className="flex flex-col">
          <div className={`bg-background-100 rounded-tr-xl p-4 size-max self-start`}>
            opponent Message
          </div>
          <div className={`bg-background-100 rounded-tl-xl p-4 size-max self-end`}>my Message</div>
        </div>
        <Input classNames={{ base: `pt-2` }} endContent={<LuSend size={22} />}></Input>
      </CardBody>
    </NextCard>
  );
};

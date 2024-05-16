'use client';
import { SvgProps } from '@/types';
import {
  Divider,
  Code,
  CardBody,
  CardHeader,
  Card as NextCard,
  Button as NextButton,
} from '@nextui-org/react';
import { FC, useEffect, useState } from 'react';
import { LuCheck, LuX } from 'react-icons/lu';

export const SegmentTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: any = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
      setTime(0);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const onTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <NextCard className={`w-full shadow-none`}>
      <CardBody>
        <div className={`flex flex-wrap justify-center gap-4`}>
          <Code color="primary" className={`text-2xl bg-background-50`}>
            <div>Round 1 / 12</div>
          </Code>
          <FormatTime time={time} />
          <NextButton
            onClick={onTimer}
            startContent={isActive ? <LuCheck size={22} /> : <LuX size={22} />}
            variant="flat"
            color={isActive ? 'success' : 'danger'}>
            Not Ready
          </NextButton>
        </div>
      </CardBody>
    </NextCard>
  );
};

const FormatTime: FC<SvgProps & { time: number }> = ({ time }) => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  return (
    <div className="flex gap-4">
      <Code color="primary" className="minutes text-2xl w-16 text-center bg-background-50">
        {minutes.toString().padStart(2, '0')}
      </Code>
      <Code color="primary" className="seconds text-2xl w-16 text-center bg-background-50">
        {seconds.toString().padStart(2, '0')}
      </Code>
    </div>
  );
};

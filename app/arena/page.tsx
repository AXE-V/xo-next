import { SegmentCells } from '@/components/common/segments/arena';
import { SegmentChat } from '@/components/common/segments/chat';
import { SegmentOpponents } from '@/components/common/segments/opponents';
import { SegmentTimer } from '@/components/common/segments/timer';
import { title } from '@/components/primitives';
import { createClient } from '@/utils/supabase/server';
import { CardBody, Card as NextCard } from '@nextui-org/react';
import clsx from 'clsx';
import { redirect } from 'next/navigation';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';

export default async function Arena() {
  // const supabase = createClient();
  // const { data, error } = await supabase.auth.getUser();

  // if (error || !data.user) {
  //   redirect('/login');
  // }

  // раньше использовалось
  // useEffect(() => {
  //   const cellContainer = document.querySelector('.cells-container') as HTMLElement;
  //   cellContainer.style.gridTemplateColumns = `repeat(${arenaSize},minmax(30px,1fr))`;
  // }, []);

  return (
    <div
      className={clsx(
        `arena grid size-full gap-y-6 gap-x-6 bg-background-200`,
        `grid-cols-[1fr,1fr]`,
      )}>
      <div className={`grid grid-rows-[1fr,max-content] gap-6`}>
        <SegmentTimer />
        <SegmentCells />
      </div>
      <div className="grid grid-rows-[max-content,1fr] gap-6">
        <SegmentOpponents />
        <SegmentChat />
      </div>
    </div>
  );
}

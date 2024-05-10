'use client';
import { SegmentChat } from '@/components/common/segments/chat';
import { SegmentOpponents } from '@/components/common/segments/opponents';
import { Timer } from '@/components/common/segments/timer';
import { title } from '@/components/primitives';
import { Card as NextCard } from '@nextui-org/react';
import clsx from 'clsx';
import { useEffect } from 'react';

const arenaSize = 3;
export default function Arena() {
  useEffect(() => {
    const cellContainer = document.querySelector('.cells-container') as HTMLElement;
    cellContainer.style.gridTemplateColumns = `repeat(${arenaSize},minmax(30px,1fr))`;
  }, []);

  return (
    <>
      <div
        className={clsx(
          `arena grid h-full py-4 gap-y-6 gap-x-6 bg-background-200`,
          `grid-cols-[1fr,1fr] grid-rows-[1fr]`,
        )}>
        <div className={`grid grid-rows-[1fr,max-content] gap-6 pl-4`}>
          <Timer />
          <div className={clsx(`cells-container`, `grid gap-2`)}>
            {[...new Array(arenaSize ** 2)].map((_, i) => (
              <NextCard
                key={i}
                className={`bg-background-100 rounded-xl aspect-square shadow-none`}>
                {i}
              </NextCard>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-[max-content,1fr] gap-6 pr-4">
          <SegmentOpponents />
          <SegmentChat />
        </div>
      </div>
    </>
  );
}

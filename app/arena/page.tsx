import { SegmentChat } from '@/components/common/segment-chat';
import { SegmentOpponents } from '@/components/common/segment-opponents';
import { Timer } from '@/components/common/segment-timer';
import { title } from '@/components/primitives';
import { Card as NextCard } from '@nextui-org/react';

const arenaSize = 5;
export default function Arena() {
  return (
    <>
      <section
        className={`grid grid-cols-[max-content,1fr] px-4 pt-5 pb-3 h-full gap-6 bg-background-200`}>
        <div className={`relative grid grid-rows-[min-content,1fr] grid-cols-[max-content] gap-4`}>
          <Timer />
          <div
            className={`relative grid grid-cols-3 grid-rows-3 gap-2 size-max -translate-y-1/2 top-1/2`}>
            {[...new Array(9)].map((_, i) => (
              <NextCard key={i} className={`bg-background rounded-xl md:size-40 2xl:size-56`}>
                {i}
              </NextCard>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-[max-content,1fr] gap-6">
          <SegmentOpponents />
          <SegmentChat />
        </div>
      </section>
    </>
  );
}

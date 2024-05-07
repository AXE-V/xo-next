import { SegmentChat } from '@/components/common/segment-chat';
import { SegmentOpponents } from '@/components/common/segment-opponents';
import { Timer } from '@/components/common/timer';
import { title } from '@/components/primitives';
import { Card as NextCard, CardBody, CardHeader } from '@nextui-org/react';

const arenaSize = 5;
export default function Arena() {
  return (
    <>
      <section className={`grid grid-cols-[max-content,1fr] pl-4 h-full`}>
        <div className={`relative grid grid-rows-[min-content,1fr] grid-cols-[max-content] gap-4`}>
          <Timer />
          <div
            className={`relative grid grid-cols-3 grid-rows-3 place-items-center gap-2 size-max`}>
            {[...new Array(9)].map((_, i) => (
              <div key={i} className={`bg-background-200 rounded-lg md:size-40 2xl:size-56`}>
                {i}
              </div>
            ))}
          </div>
        </div>
        <div>
          <SegmentOpponents />
          <SegmentChat />
        </div>
      </section>

      {/* <section className={`grid grid-cols-[max-content,1fr] pl-4 h-full`}>
        <div className={`relative grid grid-rows-[min-content,1fr] grid-cols-[max-content] gap-2`}>
          <Timer />
          <div
            className={`relative grid grid-cols-3 grid-rows-3 place-items-center gap-2 size-max`}>
            {[...new Array(9)].map((_, i) => (
              <div key={i} className={`bg-background-200 rounded-md md:size-40 2xl:size-56`}>
                {i}
              </div>
            ))}
          </div>
        </div>
        <div>
          <SegmentOpponents />
          <SegmentChat />
        </div>
      </section> */}
    </>
  );
}

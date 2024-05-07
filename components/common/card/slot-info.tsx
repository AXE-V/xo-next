'use client';
import { UserCardData } from '@/types';
import { Checkbox } from '@nextui-org/react';
import { useEffect, useRef } from 'react';

type Props = {
  checked: { value?: boolean };
};
export const SlotInfo = ({ nickName, label, checked }: UserCardData & Props) => {
  useEffect(() => {
    function running() {
      const containers = document.querySelectorAll('[data-running-container]');
      containers.forEach((container) => {
        const runningElement1 = container.querySelector('[data-running1]');
        const runningElement2 = container.querySelector('[data-running2]');
        if (runningElement1 && runningElement2) {
          runningElement1.clientWidth > container.clientWidth
            ? (runningElement1.classList.add('animate-running1'),
              runningElement2.classList.add('animate-running2'))
            : void 0;
        }
      });
    }
    running();
  }, []);

  return (
    <div data-running-container className={`bg-background-100 w-48 rounded-lg p-2`}>
      <div className={`flex relative overflow-x-hidden`}>
        <div className={`whitespace-nowrap text-foreground`}>
          <p data-running1 className={`w-full`}>
            {nickName}
          </p>
        </div>
        <div className={`whitespace-nowrap text-foreground absolute top-0`}>
          <p data-running2 className={`w-full`}>
            {nickName}
          </p>
        </div>
      </div>
      <div className={`flex justify-between`}>
        <span className={`text-foreground-50`}>{label}</span>
        <Checkbox className={`pointer-events-none`} isSelected={checked.value} />
      </div>
    </div>
  );
};

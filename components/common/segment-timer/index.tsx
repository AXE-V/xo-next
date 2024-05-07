import { Divider, Code, CardBody, CardHeader, Card as NextCard } from '@nextui-org/react';

export const Timer = () => {
  return (
    <NextCard className={`w-full`}>
      <CardBody>
        <div className={`flex gap-4`}>
          <Code color="primary" className={`text-2xl `}>
            <div>Round 1 / 12</div>
          </Code>
          <Divider orientation="vertical" />

          <div className={`grid grid-cols-3 gap-4`}>
            <Code
              color="primary"
              className="minutes text-2xl size-full text-center bg-background-50">
              12
            </Code>
            <Code
              color="primary"
              className="seconds text-2xl size-full text-center bg-background-50">
              35
            </Code>
            <Code
              color="primary"
              className="milliseconds text-2xl size-full text-center bg-background-50 ">
              41
            </Code>
          </div>
        </div>
      </CardBody>
    </NextCard>
  );
};

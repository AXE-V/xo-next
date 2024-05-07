import { Divider, Code, CardBody, CardHeader, Card as NextCard } from '@nextui-org/react';

export const Timer = () => {
  return (
    <NextCard className={`w-full`}>
      <CardBody>
        <div className={`flex gap-4`}>
          <Code color="primary">
            <div>Round 1</div>
          </Code>
          <Divider orientation="vertical" />
          <Code color="primary">12:14</Code>
        </div>
      </CardBody>
    </NextCard>
  );
};

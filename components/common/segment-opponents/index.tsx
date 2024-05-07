import { CardBody, CardHeader, Card as NextCard } from '@nextui-org/react';

export const SegmentOpponents = () => {
  return (
    <NextCard>
      <CardHeader>Opponents</CardHeader>
      <CardBody>
        <div className={`flex flex-col`}>
          <div>
            <h2>Willard Barber</h2>
          </div>
          <h2>Jeffery Washington</h2>
        </div>
      </CardBody>
    </NextCard>
  );
};

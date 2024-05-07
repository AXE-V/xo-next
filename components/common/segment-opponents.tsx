import { CardBody, CardHeader, Card as NextCard } from '@nextui-org/react';

export const SegmentOpponents = () => {
  return (
    <section>
      <NextCard>
        <CardHeader>Opponents</CardHeader>
        <CardBody>
          <div className={`flex flex-col`}>
            <h2>Willard Barber</h2>
            <h2>Jeffery Washington</h2>
          </div>
        </CardBody>
      </NextCard>
    </section>
  );
};

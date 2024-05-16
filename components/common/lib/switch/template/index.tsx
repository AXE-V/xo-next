import { State } from '@/types';
import { Switch, SwitchProps } from '@nextui-org/react';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  switchProps?: SwitchProps;
};
export const SwitchTemplate = ({ children, switchProps }: Props) => {
  return (
    <Switch
      size="sm"
      classNames={{
        wrapper: `group-data-[selected=true]:bg-secondary/75 bg-primary rounded-lg`,
        thumb: `rounded-md bg-background`,
        base: `pointer-events-none`,
      }}
      {...switchProps}>
      <span className={`whitespace-nowrap text-foreground group-hover/item:text-white`}>
        {children}
      </span>
    </Switch>
  );
};

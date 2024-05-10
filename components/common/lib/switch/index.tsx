import React, { ReactNode } from 'react';
import { SwitchTemplate } from './template';
import { State } from '@/types';
import { SwitchProps } from '@nextui-org/react';

type Props = {
  children?: ReactNode;
  switchProps?: SwitchProps;
};

export const CSwitch = ({ children, switchProps }: Props) => {
  return <SwitchTemplate switchProps={switchProps}>{children}</SwitchTemplate>;
};

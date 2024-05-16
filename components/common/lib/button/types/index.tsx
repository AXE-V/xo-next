import { State } from '@/types';
import { BadgeProps, ButtonProps, TooltipProps } from '@nextui-org/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

// types button
export type ButtonSetting<T = any> = {
  key: React.Key;
  url?: string;
  Icon?: IconType;
  state?: State<T>;
  badge?: BadgeProps;
};

export type Buttons<T = any> = {
  buttons: ButtonSetting<T>[];
  common?: {
    iconSize?: number;
    toolTip?: TooltipProps;
    btnProps?: ButtonProps;
  };
};

export type ButtonComponent<T = any> = {
  state?: State<T>;
  key?: React.Key;
  children?: ReactNode;
  Icon?: JSX.Element;
  badge?: BadgeProps;
  btnProps?: ButtonProps;
  toolTip?: TooltipProps;
};

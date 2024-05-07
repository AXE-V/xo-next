import { ReactElement, ReactNode, SVGProps } from 'react';
import { IconType } from 'react-icons';
import { BadgeProps, TooltipProps, ButtonProps, SelectProps } from '@nextui-org/react';
/**
 * custom type
 */
export interface SvgProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

// types button
export type ButtonSetting<T = any> = {
  key: React.Key;
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

export type PanelButtons<T = any> = {
  buttons: ButtonSetting<T>[];
  iconSize?: number;
};

//state
export type State<T = any> = {
  stateVal?: T;
  setStateVal?: React.Dispatch<React.SetStateAction<T>>;
};

// select
export type SelectComponentProps = { themeProp?: string[]; selectProps?: SelectProps };

//user data
export type UserCardData = {
  id?: any;
  nickName?: string;
  label?: string;
  friend?: boolean;
  status?: {
    activity: 'online' | 'offline' | 'not active' | 'not disturb';
    color: 'danger' | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | undefined;
  };
  imageUrl?: string;
};

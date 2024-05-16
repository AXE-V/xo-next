import { ReactElement, ReactNode, SVGProps } from 'react';
import { IconType } from 'react-icons';
import { BadgeProps, TooltipProps, ButtonProps, SelectProps } from '@nextui-org/react';
import { ButtonSetting } from '@/components/common/lib/button/types';
/**
 * custom type
 */
export interface SvgProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * custom type
 */
export type State<T = any> = {
  stateVal?: T;
  setStateVal?: React.Dispatch<React.SetStateAction<T>>;
};

/**
 * custom type
 */
export type SelectComponentProps = { themeProp?: string[]; selectProps?: SelectProps };

/**
 * custom type
 */
export type UserCardData = {
  id?: any;
  nickName?: string;
  label?: string;
  friend?: boolean;
  status?: UserStatus;
  imageUrl?: string;
  //
  gameReady?: boolean;
};

/**
 * custom type
 */
export type UserStatus = {
  activity: ActivityStatus;
  color: ActivityColors;
};

export type ActivityStatus = 'online' | 'offline' | 'not active' | 'not disturb';
export type ActivityColors =
  | 'danger'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | undefined;

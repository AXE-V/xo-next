import { ButtonSetting } from '../../lib/button/types';

export type PanelButtons<T = any> = {
  buttons: ButtonSetting<T>[];
  iconSize?: number;
};

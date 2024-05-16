import { State } from '@/types';
import {
  ListboxItemProps,
  ListboxItemSlots,
  ListboxProps,
  ListboxSectionProps,
  ListboxSectionSlots,
  ListboxSlots,
  SlotsToClasses,
} from '@nextui-org/react';
import { type } from 'os';
import { ReactNode } from 'react';

export interface LbSections {
  sections: ListboxSectionProps[];
  template: ReactNode;
}

export interface LbOwnTemplate {
  ownTemplate?: (props: ListboxItemProps & State) => JSX.Element;
}

export type SectionProps = {
  title?: string;
  // items: Array<{ child: string | ReactNode; value: string }>;
  items: (ListboxItemProps & State & LbOwnTemplate)[];
  // template?: (children: string | ReactNode) => JSX.Element;
  template?: (props: ListboxItemProps & State) => JSX.Element;
};

export interface ListboxConfig {
  sections: SectionProps[];
  classNames?: LbClassNames;
}

export type LbClassNames = {
  listbox?: SlotsToClasses<ListboxSlots>;
  listboxSection?: SlotsToClasses<ListboxSectionSlots>;
  listboxItem?: SlotsToClasses<ListboxItemSlots>;
};

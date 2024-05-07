import { Buttons, UserCardData } from '@/types';
import { LuHome, LuLogOut, LuPlay, LuUsers } from 'react-icons/lu';
import { Button } from '@/components/common/button';
import { TooltipProps } from '@nextui-org/react';

export const PANEL_BUTTONS: Buttons = {
  buttons: [
    { Icon: LuHome, key: 'Home' },
    { Icon: LuPlay, key: 'Arena' },
    { Icon: LuUsers, key: 'Users' },
  ],
  common: {
    iconSize: 22,
    toolTip: {
      placement: 'right',
      color: 'foreground',
      radius: 'sm',
      classNames: { base: `font-medium` },
    },
    btnProps: { className: `bg-background-100`, isIconOnly: true },
  },
};

export const renderControlPanel = ({ buttons, common }: Buttons) => {
  return buttons.map((obj) => {
    const toolTipObj: TooltipProps = { ...common?.toolTip, content: obj.key };

    return (
      <Button
        key={obj.key}
        Icon={obj.Icon?.({ size: common?.iconSize })}
        badge={obj.badge}
        btnProps={common?.btnProps}
        toolTip={toolTipObj}
      />
    );
  });
};

// example
export const users: UserCardData[] = [
  {
    id: 1,
    nickName: 'Felix McCarthy',
    label: 'Round 2/7',
    status: { activity: 'not disturb', color: 'danger' },
    imageUrl: 'https://i.pinimg.com/236x/32/bb/39/32bb392bffa723f39ccb58f6f717dd4e.jpg',
    friend: true,
  },
  {
    id: 2,
    nickName: 'Carole King',
    label: 'Offline',
    status: { activity: 'offline', color: 'default' },
    imageUrl: 'https://i.pinimg.com/236x/fd/7f/76/fd7f76822f12b71228aafc56dacc1a50.jpg',
    friend: true,
  },
  {
    id: 3,
    nickName: 'Dawn Clayton',
    label: 'In Menu',
    status: { activity: 'online', color: 'success' },
    imageUrl: 'https://i.pinimg.com/236x/52/53/87/5253879d67b35bd17e8028712b6095d2.jpg',
    friend: true,
  },
  {
    id: 4,
    nickName: 'Kevin Williams',
    label: 'Round 3/6',
    status: { activity: 'not active', color: 'warning' },
    imageUrl: 'https://i.pinimg.com/236x/fe/35/b5/fe35b577a6c1a7fcb359889d2b5af002.jpg',
    friend: true,
  },
  {
    id: 5,
    nickName: 'Kevin Williams 2',
    label: 'Round 3/6',
    status: { activity: 'not active', color: 'warning' },
    imageUrl: 'https://i.pinimg.com/236x/fe/35/b5/fe35b577a6c1a7fcb359889d2b5af002.jpg',
    friend: false,
  },
  {
    id: 6,
    nickName: 'Kevin Williams 3',
    label: 'Round 3/6',
    status: { activity: 'not active', color: 'warning' },
    imageUrl: 'https://i.pinimg.com/236x/fe/35/b5/fe35b577a6c1a7fcb359889d2b5af002.jpg',
    friend: false,
  },
  {
    id: 7,
    nickName: 'Kevin Williams 4',
    label: 'Round 3/6',
    status: { activity: 'not active', color: 'warning' },
    imageUrl: 'https://i.pinimg.com/236x/fe/35/b5/fe35b577a6c1a7fcb359889d2b5af002.jpg',
    friend: true,
  },
  {
    id: 8,
    nickName: 'Kevin Williams 5',
    label: 'Round 3/6',
    status: { activity: 'not active', color: 'warning' },
    imageUrl: 'https://i.pinimg.com/236x/fe/35/b5/fe35b577a6c1a7fcb359889d2b5af002.jpg',
    friend: true,
  },
  {
    id: 9,
    nickName: 'Kevin Williams 6iosudgdiksuf',
    label: 'Round 3/6',
    status: { activity: 'not active', color: 'warning' },
    imageUrl: 'https://i.pinimg.com/236x/fe/35/b5/fe35b577a6c1a7fcb359889d2b5af002.jpg',
    friend: true,
  },
];

import { UserCardData } from '@/types';
import {
  CardBody,
  CardHeader,
  Card as NextCard,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
  user,
} from '@nextui-org/react';

const usersBody = [
  {
    key: 1,
    nickName: 'Felix McCarthy',
    label: 'Round 2/7',
    status: { activity: 'not disturb', color: 'danger' },
    imageUrl: 'https://i.pinimg.com/236x/32/bb/39/32bb392bffa723f39ccb58f6f717dd4e.jpg',
    friend: true,
    readiness: 'not ready',
    winrate: 50,
    role: 'o',
  },
  {
    key: 2,
    nickName: 'Carole King',
    label: 'Offline',
    status: { activity: 'offline', color: 'default' },
    imageUrl: 'https://i.pinimg.com/236x/fd/7f/76/fd7f76822f12b71228aafc56dacc1a50.jpg',
    friend: true,
    readiness: 'ready',
    winrate: 67,
    role: 'x',
  },
];

const usersHeader = [
  { key: 'readiness', label: 'Readiness' },
  { key: 'nickName', label: 'Nick Name' },
  { key: 'role', label: 'Role' },
  { key: 'winrate', label: 'Win Rate' },
];
export const SegmentOpponents = () => {
  return (
    <>
      <Table classNames={{ wrapper: 'shadow-none' }}>
        <TableHeader columns={usersHeader}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody emptyContent={'No enemy'} items={usersBody}>
          {(item) => (
            <TableRow key={item.key}>
              {(colKey) => <TableCell>{getKeyValue(item, colKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

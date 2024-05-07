import { Button } from '@/components/common/button';
import { State, UserCardStatus } from '@/types';
import {
  Card,
  CardBody,
  Chip,
  Listbox,
  ListboxItem,
  ListboxItemProps,
  ListboxSection,
  Radio,
  RadioGroup,
  Switch,
  Tab,
  Tabs,
} from '@nextui-org/react';
import clsx from 'clsx';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState } from 'react';
import {
  LuArrowUpLeftFromCircle,
  LuBan,
  LuDelete,
  LuSliders,
  LuUndo2,
  LuUndoDot,
  LuUserMinus,
  LuUserMinus2,
} from 'react-icons/lu';

const inputOptionsVariants: Variants = {
  hidden: {
    top: 20,
    opacity: 0,
    // visibility: 'collapse',
  },
  visible: (custom) => ({
    top: 40,
    opacity: 1,
    // visibility: 'visible',
    transition: { duration: custom },
  }),
};

export const BtnUsersOptions = ({ focus }: { focus: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [onlyFriends, setOnlyFriends] = useState(true);
  const [online, setOnline] = useState(true);
  const [blacklisted, setBlacklisted] = useState(false);
  const [expectation, setExpectation] = useState(false);

  const listboxActivity: (ListboxItemProps & State)[] = [
    {
      key: 'Only Friends',
      children: <>Only Friends</>,
      onClick: () => setOnlyFriends(!onlyFriends),
      stateVal: onlyFriends,
    },
    {
      key: 'Online',
      children: <>Online</>,
      onClick: () => setOnline(!online),
      stateVal: online,
    },
    {
      key: 'blacklisted',
      children: <>Blacklisted</>,
      onClick: () => setBlacklisted(!blacklisted),
      stateVal: blacklisted,
    },
    {
      key: 'Expectation',
      children: <>Expectation</>,
      onClick: () => setExpectation(!expectation),
      stateVal: expectation,
    },
  ];

  const listboxActions: ListboxItemProps[] = [
    {
      key: 'Add to blacklist',
      children: <>Add to blacklist</>,
      description: <>You will not receive notifications from selected user</>,
      startContent: <LuBan size={22} />,
    },
    {
      key: 'Return from blacklist',
      children: <>Return from blacklist</>,
      description: <>Returns selected users from your blocklist</>,
      startContent: <LuUndoDot size={22} />,
    },
    {
      key: 'Remove users',
      children: <>Remove users</>,
      description: <>Remove selected users from your list</>,
      startContent: <LuUserMinus2 size={22} />,
    },
  ];

  return (
    <div className="relative">
      <Button
        toolTip={{
          content: 'Options',
          color: 'foreground',
          radius: 'sm',
          classNames: { base: `font-medium` },
        }}
        btnProps={{
          onClick: () => setIsOpen(!isOpen),
          isIconOnly: true,
          className: clsx(
            `data-[hover=true]:bg-transparent, text-background-200`,
            focus ? 'text-foreground' : void 0,
          ),
        }}>
        <LuSliders size={22} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 0 }}
            className={clsx(`absolute z-20 right-0`)}>
            <Card
              classNames={{
                base: clsx(`bg-background-100 border-secondary/75 border-2`),
                body: `bg-background`,
              }}>
              <CardBody className={`flex flex-col gap-y-2`}>
                <Listbox aria-labelledby={`input options`} classNames={{ base: `p-0` }}>
                  <ListboxSection
                    title={`Users activity`}
                    classNames={{ heading: 'text-foreground-50' }}>
                    {listboxActivity.map((item) => {
                      const { children, stateVal } = item;
                      return (
                        <ListboxItem
                          {...item}
                          classNames={{
                            base: 'data-[hover=true]:bg-background-50 group/item',
                            description: 'group-hover:text-foreground-50',
                          }}>
                          <Switch
                            isSelected={stateVal}
                            size="sm"
                            className=""
                            classNames={{
                              wrapper: `group-data-[selected=true]:bg-secondary/75 bg-primary rounded-lg`,
                              thumb: `rounded-md bg-background`,
                              base: `pointer-events-none`,
                            }}>
                            <span
                              className={`whitespace-nowrap text-foreground group-hover/item:text-white`}>
                              {children}
                            </span>
                          </Switch>
                        </ListboxItem>
                      );
                    })}
                  </ListboxSection>
                  <ListboxSection title={'Actions'} classNames={{ heading: 'text-foreground-50' }}>
                    {listboxActions.map((item) => {
                      const { children } = item;
                      return (
                        <ListboxItem
                          {...item}
                          classNames={{
                            base: `data-[hover=true]:bg-background-50`,
                            description: 'text-foreground-50 group-hover:text-foreground-50',
                          }}>
                          {children}
                        </ListboxItem>
                      );
                    })}
                  </ListboxSection>
                </Listbox>
              </CardBody>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import { Button } from "@/components/common/button";
import { Card, CardBody, Listbox, ListboxItem, ListboxSection, Tab, Tabs } from "@nextui-org/react";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { LuSliders } from "react-icons/lu";

const anima: Variants = {
  hidden: {
    top: 20,
    opacity: 0,
    visibility: 'collapse',
  },
  visible: (custom) => ({
    top: 40,
    opacity: 1,
    visibility: 'visible',
    transition: { duration: custom },
  }),
};

export const BtnInputOptions = ({ focus }: { focus: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button
        toolTip={{ content: 'Options', color: 'foreground', radius: 'sm' }}
        btnProps={{
          onClick: onClick,
          isIconOnly: true,
          className: clsx(
            `data-[hover=true]:bg-transparent, text-background-200`,
            focus ? 'text-foreground' : void 0,
          ),
        }}>
        <LuSliders size={22} />
      </Button>

      <motion.div
        variants={anima}
        initial="hidden"
        animate={!isOpen ? 'hidden' : 'visible'}
        className={clsx(`absolute mt-2 z-20 right-0`)}>
        <Card
          classNames={{
            base: clsx(`bg-background-50 border-secondary/75 border-2`),
            body: `bg-background-200`,
          }}>
          <CardBody>
            <Tabs variant="light" color="secondary">
              <Tab title="Other users"></Tab>
              <Tab title="Friends"></Tab>
            </Tabs>
            <Listbox aria-labelledby={`listbox-users`}>
              <ListboxSection>
                {[...new Array(5)].map((_, i) => (
                  <ListboxItem key={i}>i</ListboxItem>
                ))}
              </ListboxSection>
            </Listbox>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};
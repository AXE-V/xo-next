import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/react';
import { ListboxConfig } from '../types';

export const ListboxTemplate = (lbData: ListboxConfig) => {
  const { sections, classNames } = lbData;
  return (
    <>
      <Listbox classNames={classNames?.listbox}>
        {sections.map((section) => (
          <ListboxSection
            classNames={classNames?.listboxSection}
            title={section.title}
            key={section.title}>
            {section.items.map((item) => (
              <ListboxItem
                classNames={classNames?.listboxItem}
                {...item}
                key={item.key}
                children={
                  item.ownTemplate
                    ? item.ownTemplate?.(item)
                    : section.template
                    ? section.template?.(item)
                    : item.children
                }
              />
            ))}
          </ListboxSection>
        ))}
      </Listbox>
    </>
  );
};

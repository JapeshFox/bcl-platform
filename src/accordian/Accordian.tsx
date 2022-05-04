import React, { ReactElement, useState } from 'react';
import AccordianItem from "./AccordianItem"

type Item = Object & { title: string };

export default function Accordian({
  items,
  renderBody,
}: {
  items: Item[];
  renderBody: (
    item: Item,
    index: number,
    items: Item[]
  ) => ReactElement | string;
}) {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="accordion">
      {items.map((item, index) => {
        return (
          <AccordianItem
            title={item.title}
            index={index}
            isActive={activeIndex === index}
            setActiveIndex={setActiveIndex}
          >
            {renderBody(item, index, items)}
          </AccordianItem>
        );
      })}
    </div>
  );
}

Accordian.defaultProps = {
  items: [],
  renderBody: () => '',
};

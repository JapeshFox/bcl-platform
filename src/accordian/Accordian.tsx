import React, { ReactElement, useCallback, useState } from 'react';
import clsx from 'clsx';
import logo from '../images/arrow-down.svg';

type AccordianItemProps = {
  index: number;
  isActive: boolean;
  setActiveIndex: (index: number) => void;
  children: ReactElement | string;
};

function AccordianItem({
  index,
  isActive,
  setActiveIndex,
  children,
}: AccordianItemProps) {
  const headingId = `accordianItemHeading${index}`;
  const bodyId = `accordianItemBody${index}`;

  const onClick = useCallback(() => {
    setActiveIndex(isActive ? -1 : index);
  }, [isActive, index]);

  return (
    <div className="accordionItem collapsed bg-white border border-gray-200">
      <h2 className="accordionHeader mb-0" id={headingId}>
        <button
          className="
  accordionButton
  relative
  flex
  items-center
  w-full
  py-4
  px-5
  text-base text-gray-800 text-left
  bg-white
  border-0
  rounded-none
  transition
  focus:outline-none
  flex
"
          type="button"
          aria-expanded={isActive}
          aria-controls={bodyId}
          onClick={onClick}
        >
          <span className="flex-1">Accordion Item #{index + 1}</span>
          <img className="h-6" src={logo} />
        </button>
      </h2>
      <div
        id={bodyId}
        className={clsx(
          'accordionCollapse transition-all ease-in-out delay-1000 overflow-hidden',
          {
            'h-0': !isActive,
          }
        )}
        aria-labelledby={headingId}
      >
        <div className="accordionBody py-4 px-5">{children}</div>
      </div>
    </div>
  );
}

export default function Accordian({
  items,
  renderBody,
}: {
  items: Object[];
  renderBody: (
    item: Object,
    index: number,
    items: Object[]
  ) => ReactElement | string;
}) {
  const [activeIndex, setActiveIndex] = useState(1);
  // console.log('activeIndex', activeIndex);
  return (
    <div className="accordion">
      {items.map((item, index) => {
        return (
          <AccordianItem
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

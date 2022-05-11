import React, { FC, useCallback, useState } from 'react';
import AccordianItem from './AccordianItem';
import { BasicAccordianType, AccordianType } from './Accordian.types';
import { defaultProps } from './Accordian.helpers';

function withBasicAccordianHooks(Component: FC<AccordianType>) {
  const BasicAccordian: FC<BasicAccordianType> = ({
    ...props
  }: BasicAccordianType) => {
    const [activeIndex, setActiveIndex] = useState(1);
    console.log('activeIndex', activeIndex);
    const isActive = useCallback(
      (index: number, currentActiveIndex = activeIndex) =>
        currentActiveIndex === index,
      [activeIndex]
    );
    const _setActiveIndex = useCallback((index: number) => {
      setActiveIndex((currentActiveIndex) =>
        isActive(index, currentActiveIndex) ? -1 : index
      );
    }, []);
    return (
      <Component
        {...props}
        isActive={isActive}
        setActiveIndex={_setActiveIndex}
      />
    );
  };
  BasicAccordian.defaultProps = defaultProps;
  return BasicAccordian;
}

function withAlwaysOpenAccordianHooks(Component: FC<AccordianType>) {
  const AlwaysOpenAccordian: FC<BasicAccordianType> = ({
    ...props
  }: BasicAccordianType) => {
    const [activeIndexes, setActiveIndex] = useState<Array<boolean>>([true]);
    const isActive = useCallback(
      (index: number, currentActiveIndexes = activeIndexes) =>
        !!currentActiveIndexes[index],
      [activeIndexes]
    );
    const _setActiveIndex = useCallback(
      (index: number) =>
        setActiveIndex(([ ...currentActiveIndexes ]) => {
          currentActiveIndexes[index] = !isActive(index, currentActiveIndexes);
          return currentActiveIndexes;
        }),
      []
    );
    return (
      <Component
        {...props}
        isActive={isActive}
        setActiveIndex={_setActiveIndex}
      />
    );
  };
  AlwaysOpenAccordian.defaultProps = defaultProps;
  return AlwaysOpenAccordian;
}

const AccordianContainer: FC<AccordianType> = ({
  items,
  renderBody,
  isActive,
  setActiveIndex,
}) => (
  <div className="accordion">
    {items.map((item, index) => (
      <AccordianItem
        key={index}
        title={item.title}
        index={index}
        isActive={isActive(index)}
        setActiveIndex={setActiveIndex}
      >
        {renderBody(item, index, items)}
      </AccordianItem>
    ))}
  </div>
);

const BasicAccordian = withBasicAccordianHooks(AccordianContainer);
const AlwaysOpenAccordian = withAlwaysOpenAccordianHooks(AccordianContainer);

AccordianContainer.defaultProps = defaultProps;

export {
  AlwaysOpenAccordian,
  BasicAccordian,
  BasicAccordianType,
  AccordianType,
};

function Accordian({
  items,
  renderBody,
  alwaysOpen,
}: BasicAccordianType & { alwaysOpen: boolean }) {
  if (alwaysOpen) {
    return <AlwaysOpenAccordian items={items} renderBody={renderBody} />;
  }
  return <BasicAccordian items={items} renderBody={renderBody} />;
}

Accordian.defaultProps = { ...defaultProps, alwaysOpen: false };
export default Accordian;

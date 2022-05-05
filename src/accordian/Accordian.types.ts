import { ReactElement, HTMLAttributes } from 'react';

export type Item = Object & { title: string };
export interface BasicAccordianProps extends HTMLAttributes<HTMLDivElement> {
  items: Item[];
  renderBody: (
    item: Item,
    index: number,
    items: Item[]
  ) => ReactElement | string;
}

export interface AccordianProps extends BasicAccordianProps {
  isActive: (index: number) => boolean;
  setActiveIndex: (index: number) => void;
}

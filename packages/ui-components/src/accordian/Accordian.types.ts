import { ReactElement, HTMLAttributes } from 'react';

export type Item = Record<string, unknown> & { title: string };
export interface BasicAccordianType extends HTMLAttributes<HTMLDivElement> {
  items: Item[];
  renderBody: (
    item: Item,
    index: number,
    items: Item[]
  ) => ReactElement | string | JSX.Element;
}

export interface AccordianType extends BasicAccordianType {
  isActive: (index: number) => boolean;
  setActiveIndex: (index: number) => void;
}

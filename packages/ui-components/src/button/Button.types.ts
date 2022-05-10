import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonAction: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  label: string;
  size: 'large' | 'medium' | 'small';
  variant: 'primary' | 'secondary';
  outlined: boolean;
}

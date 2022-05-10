import React, { FC } from 'react';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ variant, buttonAction, disabled,  outlined = false, label, size = 'medium'}) => {

    const isPrimary = variant ? variant === 'primary' : true;
    const colorStyles = outlined ? 'bg-white text-black' : isPrimary ? 'bg-indigo-800 text-white' : 'bg-indigo-100'
    const disabledStyles = disabled ? 'opacity-30 cursor-not-allowed': '';
    
    const getSize = () => {
        const sizeStyles = [];
        if (size === 'large') {
            sizeStyles.push('h-12');
        } else if(size === 'medium'){
            sizeStyles.push('h-10');
        } 
        else if (size === 'small') {
            sizeStyles.push('h-8');
        }
        return sizeStyles.join(' ');
    }

    const sizeStyles = React.useMemo(() => getSize(), [size]);
    return(
        <button type='button' className={`flex items-center rounded-sm border border-black p-2 ${disabledStyles} ${colorStyles} ${sizeStyles}`} disabled={disabled} onClick={buttonAction}>
            {label}
        </button>
    )
}

export default Button;
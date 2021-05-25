import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ElementProps } from '../Element';
declare type Variant = 'primary' | 'secondary' | 'delete';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ElementProps {
    icon?: ReactNode;
    variant?: Variant;
    as?: any;
    to?: string;
}
declare const Button: ({ as, ...props }: ButtonProps) => JSX.Element;
export default Button;
//# sourceMappingURL=index.d.ts.map
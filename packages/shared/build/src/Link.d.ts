import { AnchorHTMLAttributes } from 'react';
import { ElementProps } from './Element';
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ElementProps {
    as?: any;
    to?: string;
}
declare const Link: ({ as, ...props }: LinkProps) => JSX.Element;
export default Link;
//# sourceMappingURL=Link.d.ts.map
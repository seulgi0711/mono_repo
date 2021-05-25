import styled from '@emotion/styled';
import React, { AnchorHTMLAttributes } from 'react';
import Element, { ElementProps } from './Element';

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ElementProps {
  as?: any;
  to?: string;
}

const Link = ({ as = 'a', ...props }: LinkProps) => {
  return <StyledElement as={as} {...props} />;
};

const StyledElement = styled(Element)`
  cursor: pointer;
`;

export default Link;

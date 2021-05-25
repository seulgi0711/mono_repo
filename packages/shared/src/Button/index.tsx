import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';
import Element, { ElementProps } from '../Element';

type Variant = 'primary' | 'secondary' | 'delete';
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ElementProps {
  icon?: ReactNode;
  variant?: Variant;
  as?: any;
  to?: string;
}

const Button = ({ as, ...props }: ButtonProps) => {
  const usedAs = as || props.to ? 'a' : 'button';
  return (
    <StyledElement as={usedAs as ElementType<any>} type="button" {...props} />
  );
};

const StyledElement = styled(Element)<ButtonProps>`
  cursor: pointer;
  border-radius: 4px;
  border: 0;
  padding: ${(props) => (props.icon ? '8px 16px' : '16px')};
  font-weight: 600;
  font-size: 14px;

  ${({ variant = 'primary', theme }) => {
    return css`
      background-color: ${theme.colors[variant]};
    `;
  }};
`;

export default Button;

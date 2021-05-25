import React from 'react';
import icons from '../../build/sprite-sheet.svg';
import { ElementProps } from '../Element';

export interface IconProps extends ElementProps {
  name: string;
  width: number;
  height: number;
}

export const iconBaseUrl = icons;

const Icon = ({ name, width, height }: IconProps) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`${iconBaseUrl}#${name}`} />
    </svg>
  );
};

export default Icon;

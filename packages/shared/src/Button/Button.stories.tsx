import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from './index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const IconPrimary = Template.bind({});
IconPrimary.args = {
  variant: 'primary',
  children: 'Icon Primary Button',
};

// export const Large = Template.bind({});
// Large.args = {
//   children: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   children: 'Button',
// };

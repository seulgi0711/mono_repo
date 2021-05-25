import { Meta } from '@storybook/react';
import React from 'react';
import Confirm from '.';

export default {
  title: 'Example/Confirm',
  component: Confirm,
} as Meta;

// export const Default = Template.bind({});
export const Default = () => {
  return <Confirm title="근무제도 생성" />;
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

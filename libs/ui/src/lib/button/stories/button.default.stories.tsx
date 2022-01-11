import { Story, Meta } from '@storybook/react';
import { PropsWithChildren } from 'react';
import { Button, ButtonProps } from '../button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<PropsWithChildren<ButtonProps>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'ボタン',
};

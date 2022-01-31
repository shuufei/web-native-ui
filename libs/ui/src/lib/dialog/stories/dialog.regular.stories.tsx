import { Meta, Story } from '@storybook/react';
import { Dialog, DialogProps } from '../dialog';

export default {
  component: Dialog,
  title: 'Dialog/Regular',
} as Meta;

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'title',
};

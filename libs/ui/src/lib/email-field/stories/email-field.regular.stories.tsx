import { EmailField, EmailFieldProps } from '../email-field';
import { Meta, Story } from '@storybook/react';
export default {
  component: EmailField,
  title: 'EmailField/Regular',
} as Meta;

const Template: Story<EmailFieldProps> = (args) => <EmailField {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Email',
  description: 'Emailを入力してください',
  invalidMessage: '適切な値を入力してください',
};

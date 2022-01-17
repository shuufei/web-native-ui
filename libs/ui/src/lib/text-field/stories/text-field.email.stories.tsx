import { TextField, TextFieldProps } from '../text-field';
import { Meta, Story } from '@storybook/react';
export default {
  component: TextField,
  title: 'TextField/Email',
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  placeholder: 'テキストを入力してください',
  type: 'email',
  label: 'Email',
  description: 'Emailを入力してください',
  invalidMessage: '適切な値を入力してください',
};
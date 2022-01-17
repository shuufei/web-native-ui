import { TextField, TextFieldProps } from '../text-field';
import { Meta, Story } from '@storybook/react';
export default {
  component: TextField,
  title: 'TextField/text',
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  placeholder: 'テキストを入力してください',
};

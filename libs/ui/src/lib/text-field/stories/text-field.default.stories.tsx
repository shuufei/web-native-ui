import { TextField, TextFieldProps } from '../text-field';
import { Meta, Story } from '@storybook/react';
export default {
  component: TextField,
  title: 'TextField',
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'テキストを入力してください',
};

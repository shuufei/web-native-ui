import { TextField, TextFieldProps } from '../text-field';
import { Meta, Story } from '@storybook/react';
export default {
  component: TextField,
  title: 'TextField/Regular',
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'ユーザ名',
  description: 'アプリケーションで利用するユーザ名を入力してください。',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Enabled.args,
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Enabled.args,
  isInvalid: () => true,
  invalidMessage: '必須項目です',
};

export const Focus = Template.bind({});
Focus.args = {
  ...Enabled.args,
};
Focus.parameters = {
  pseudo: { focus: true },
};

export const Hover = Template.bind({});
Hover.args = {
  ...Enabled.args,
};
Hover.parameters = {
  pseudo: { hover: true },
};

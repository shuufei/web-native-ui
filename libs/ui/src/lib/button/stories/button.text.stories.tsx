import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../button';

export default {
  component: Button,
  title: 'Button/Text',
  args: {
    type: 'text',
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>ボタン</Button>
);

export const Enabled = Template.bind({});
Enabled.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Hover = Template.bind({});
Hover.args = {};
Hover.parameters = {
  pseudo: { hover: true },
};

export const Active = Template.bind({});
Active.args = {};
Active.parameters = {
  pseudo: { active: true },
};

export const Focus = Template.bind({});
Focus.args = {};
Focus.parameters = {
  pseudo: { focus: true },
};

import { Link, LinkProps } from '../link';
import { Meta, Story } from '@storybook/react';
import { PropsWithChildren } from 'react';

export default {
  component: Link,
  title: 'Link',
} as Meta;

const Template: Story<PropsWithChildren<LinkProps>> = (args) => (
  <Link {...args} />
);

const args = {
  href: `./${new Date().valueOf()}`,
  children: <>リンク</>,
};

export const Normal = Template.bind({});
Normal.args = { ...args };

export const Visited = Template.bind({});
Visited.args = { ...args };
Visited.parameters = {
  pseudo: { visited: true },
};

export const Disabled = Template.bind({});
Disabled.args = { ...args, isDisabled: true };

export const Focus = Template.bind({});
Focus.args = { ...args };
Focus.parameters = {
  pseudo: { focus: true },
};

export const Hover = Template.bind({});
Hover.args = { ...args };
Hover.parameters = {
  pseudo: { hover: true },
};

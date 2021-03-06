import { Meta, Story } from '@storybook/react';
import { SearchField, SearchFieldProps } from '../search-field';

export default {
  component: SearchField,
  title: 'SearchField/Regular',
} as Meta;

const Template: Story<SearchFieldProps> = (args) => <SearchField {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  label: '検索',
  description: 'ページ全体を検索',
  invalidMessage: '検索文字列が不正です',
};

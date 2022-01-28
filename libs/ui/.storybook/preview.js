import { Global } from '@emotion/react';
import React from 'react';
import { globalStyles } from '../src/lib/global-styles';

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

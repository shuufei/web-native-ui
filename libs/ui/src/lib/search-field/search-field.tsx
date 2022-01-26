import { css } from '@emotion/react';
import { FC } from 'react';

export type SearchFieldProps = {
  label: string;
  placeholder?: string;
  description?: string;
  invalidMessage?: string;
};

export const SearchField: FC<SearchFieldProps> = (props) => {
  return (
    <form role="search">
      <label
        htmlFor=""
        css={css`
          visibility: hidden;
        `}
      >
        {props.label}
      </label>
      <input type="search" name={props.label} id="" />
    </form>
  );
};

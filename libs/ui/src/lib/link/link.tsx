import { useRef } from 'react';
import { FC } from 'react';
import { useLink } from 'react-aria';
import { AriaLinkOptions } from '@react-aria/link';
import { HTMLAttributeAnchorTarget } from 'react';
import { css } from '@emotion/react';

export type LinkProps = {
  href: string;
  target?: HTMLAttributeAnchorTarget;
} & AriaLinkOptions;

export const Link: FC<LinkProps> = (props) => {
  const ref = useRef<HTMLLinkElement>(null);
  const { linkProps } = useLink(props, ref);
  return (
    <a
      {...linkProps}
      href={props.href}
      target={props.target ?? '_self'}
      css={css`
        color: ${props.isDisabled ? '#d0d0d0' : 'blue'};
        pointer-events: ${props.isDisabled ? 'none' : 'all'};
        text-decoration: none;
        cursor: ${props.isDisabled ? 'not-allowed' : 'pointer'};
        :hover {
          text-decoration: underline;
        }
        :visited {
          color: purple;
        }
      `}
    >
      {props.children}
    </a>
  );
};

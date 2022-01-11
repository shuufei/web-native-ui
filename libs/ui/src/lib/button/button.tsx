import { css, SerializedStyles } from '@emotion/react';
import { FC, useRef } from 'react';
import { useButton } from '@react-aria/button';

type ButtonType = 'text' | 'outline' | 'fill';

export type ButtonProps = {
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
};

const STYLES: {
  [key in ButtonType]: (isPressed: boolean) => SerializedStyles;
} = {
  text: (isPressed: boolean) => css`
    background-color: ${isPressed ? '#f0f0f0' : 'unset'};
    border: none;
    :disabled {
      color: #c0c0c0;
    }
    :disabled:hover {
      background-color: unset;
      cursor: not-allowed;
    }
    :hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
    :active {
      background-color: #e0e0e0;
    }
  `,
  outline: (isPressed: boolean) => css`
    background-color: ${isPressed ? '#f0f0f0' : 'unset'};
    border: ${`solid 1px #101010`};
    :disabled {
      color: #c0c0c0;
      border-color: #c0c0c0;
    }
    :disabled:hover {
      background-color: unset;
      cursor: not-allowed;
    }
    :hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
    :active {
      background-color: #e0e0e0;
    }
  `,
  fill: (isPressed: boolean) => css`
    color: #ffffff;
    background-color: ${isPressed ? '#707070' : '#101010'};
    border: none;
    :disabled {
      background-color: #c0c0c0;
    }
    :disabled:hover {
      background-color: #c0c0c0;
      cursor: not-allowed;
    }
    :hover {
      background-color: #404040;
      cursor: pointer;
    }
    :active {
      background-color: #707070;
    }
  `,
};

export const Button: FC<ButtonProps> = (props = { type: 'fill' }) => {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(
    { onPress: props.onClick, isDisabled: !!props.disabled },
    ref
  );

  const style = STYLES[props.type ?? 'fill'](isPressed);

  return (
    <button
      {...buttonProps}
      ref={ref}
      css={css`
        ${style}
        border-radius: 3px;
        padding: 4px 8px;
        :focus {
          box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
          outline: none;
        }
      `}
    >
      {props.children}
    </button>
  );
};

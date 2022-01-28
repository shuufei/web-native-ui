import { css } from '@emotion/react';
import { useSearchFieldState } from '@react-stately/searchfield';
import { FC, useRef, useState } from 'react';
import { useSearchField } from 'react-aria';

export type SearchFieldProps = {
  label: string;
  placeholder?: string;
  description?: string;
  invalidMessage?: string;
  disabled?: boolean;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  isInvalid?: (value: string) => boolean;
  onSubmit?: (value: string) => void;
};

export const SearchField: FC<SearchFieldProps> = (props) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const state = useSearchFieldState({
    ...props,
    onChange: (value: string) => {
      const _isInvalid = props.isInvalid
        ? props.isInvalid(value)
        : !(ref.current?.checkValidity() ?? true);
      setIsInvalid(_isInvalid);
    },
  });
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useSearchField(
      {
        ...props,
      },
      state,
      ref
    );

  return (
    <form
      role="search"
      onSubmit={() => {
        props.onSubmit && props.onSubmit(state.value);
      }}
    >
      <input {...inputProps} ref={ref} />
      <button type="submit" id={labelProps.id}>
        {props.label}
      </button>
      <div
        css={css`
          font-size: 14px;
          margin-top: 4px;
        `}
      >
        {props.description &&
          (!isInvalid || (isInvalid && !props.invalidMessage)) && (
            <p
              css={css`
                color: #555555;
              `}
              {...descriptionProps}
            >
              {props.description}
            </p>
          )}
        {isInvalid && props.invalidMessage && (
          <p
            css={css`
              color: red;
            `}
            {...errorMessageProps}
          >
            {props.invalidMessage}
          </p>
        )}
      </div>
    </form>
  );
};

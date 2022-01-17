import { css } from '@emotion/react';
import { useTextField } from '@react-aria/textfield';
import { useDebounceCallback } from '@react-hook/debounce';
import { FC, useEffect, useRef, useState } from 'react';

export type InputProps = {
  type: 'text' | 'email';
  placeholder?: string;
  defaultValue?: string;
  label?: string;
  description?: string;
  invalidMessage?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  isInvalid?: (value: string) => boolean;
  onChange?: (value: string) => boolean;
};

export const Input: FC<InputProps> = (props) => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = useDebounceCallback((eventValue: string) => {
    setValue(eventValue);
    props.onChange && props.onChange(eventValue);
  }, 500);

  const { inputProps, labelProps, descriptionProps, errorMessageProps } =
    useTextField(
      {
        type: props.type,
        defaultValue: props.defaultValue,
        placeholder: props.placeholder,
        isDisabled: props.disabled,
        isRequired: props.required,
        maxLength: props.maxLength,
        minLength: props.minLength,
        name: props.label,
        pattern: props.pattern,
        label: props.label,
        validationState: isInvalid ? 'invalid' : 'valid',
        autoComplete: props.autoComplete,
        onChange,
      },
      inputRef
    );

  useEffect(() => {
    const _isInvalid = props.isInvalid
      ? props.isInvalid(value)
      : !(inputRef.current?.checkValidity() ?? true);
    setIsInvalid(_isInvalid);
  }, [value]);

  return (
    <>
      {props.label && (
        <label
          css={css`
            font-size: 14px;
          `}
          {...labelProps}
        >
          {props.label}
        </label>
      )}
      <input
        {...inputProps}
        ref={inputRef}
        css={css`
          display: block;
          width: 100%;
        `}
      />
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
    </>
  );
};

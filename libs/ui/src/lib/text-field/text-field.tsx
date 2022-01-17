import { css } from '@emotion/react';
import { useTextField } from '@react-aria/textfield';
import { useDebounceCallback } from '@react-hook/debounce';
import { pick } from 'lodash-es';
import { FC, useEffect, useRef, useState } from 'react';

export type TextFieldProps = {
  placeholder: string;
  type?: 'text' | 'email';
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
  multiple?: boolean;
  isInvalid?: (value: string) => boolean;
  onChange?: (value: string) => boolean;
};

export const TextField: FC<TextFieldProps> = (props) => {
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
        type: props.type ?? 'text',
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

  const remainedAttributes = pick(props, ['multiple']);

  useEffect(() => {
    const _isInvalid = props.isInvalid
      ? props.isInvalid(value)
      : !(inputRef.current?.checkValidity() ?? true);
    setIsInvalid(_isInvalid);
  }, [value]);

  return (
    <>
      {props.label && <label {...labelProps}>{props.label}</label>}
      <input
        {...inputProps}
        {...remainedAttributes}
        ref={inputRef}
        css={css`
          display: block;
          width: 100%;
        `}
      />
      {props.description && <p {...descriptionProps}>{props.description}</p>}
      {isInvalid && props.invalidMessage && (
        <p {...errorMessageProps}>{props.invalidMessage}</p>
      )}
    </>
  );
};

import { FC } from 'react';
import { Input, InputProps } from '../shared/input';

export type EmailFieldProps = Pick<
  InputProps,
  | 'placeholder'
  | 'defaultValue'
  | 'label'
  | 'description'
  | 'invalidMessage'
  | 'required'
  | 'disabled'
  | 'autoComplete'
  | 'autoComplete'
  | 'maxLength'
  | 'minLength'
  | 'pattern'
  | 'isInvalid'
  | 'onChange'
> & {
  multiple?: boolean;
};

export const EmailField: FC<EmailFieldProps> = (props) => {
  return <Input {...props} type="email" />;
};

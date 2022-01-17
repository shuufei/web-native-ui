import { FC } from 'react';
import { Input, InputProps } from '../shared/input';

export type TextFieldProps = Pick<
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
>;

export const TextField: FC<TextFieldProps> = (props) => {
  return <Input {...props} type="text" />;
};

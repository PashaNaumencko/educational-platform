import { Input as UIInput, NextUIInputProps } from '@repo/shared-ui';
import {
  useController,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

type Props<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
} & NextUIInputProps;

const Input = <T extends FieldValues>({
  name,
  control,
  ...inputProps
}: Props<T>) => {
  const { field } = useController<T>({ name, control });

  return (
    <UIInput
      labelPlacement="outside"
      rounded="md"
      className="mb-5"
      {...inputProps}
      {...field}
    />
  );
};

export { Input };

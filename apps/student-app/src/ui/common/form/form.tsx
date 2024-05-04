import { FormHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { Input } from './input/input';

const Form = ({
  children,
  ...formProps
}: PropsWithChildren & FormHTMLAttributes<HTMLFormElement>) => {
  return <form {...formProps}>{children}</form>;
};

Form.Input = Input;

export { Form };

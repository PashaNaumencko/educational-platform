import { ButtonProps, Button as UIButton } from '@nextui-org/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & ButtonProps;

const Button: FC<Props> = ({ children, ...rest }) => {
  return (
    <UIButton
      className="typography-button w-full rounded-md text-white"
      {...rest}
    >
      {children}
    </UIButton>
  );
};
export { Button };

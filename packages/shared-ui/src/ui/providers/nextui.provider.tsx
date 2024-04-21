import { NextUIProvider as UINextUIProvider } from '@nextui-org/react';

const NextUIProvider = ({
  children,
  navigate,
}: {
  children: React.ReactNode;
  navigate: ((path: string) => void) | undefined;
}) => {
  return <UINextUIProvider navigate={navigate}>{children}</UINextUIProvider>;
};

export { NextUIProvider };

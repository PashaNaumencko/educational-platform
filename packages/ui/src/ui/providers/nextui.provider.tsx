import { NextUIProvider } from '@nextui-org/react';

export function Providers({
  children,
  navigate,
}: {
  children: React.ReactNode;
  navigate: () => void;
}) {
  return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
}

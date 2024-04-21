import { NextUIProvider } from '@repo/shared-ui';
import { useRouter } from 'next/router';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};

export { Providers };

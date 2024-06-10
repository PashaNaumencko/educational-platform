import { auth } from '@modules/auth/auth';
import '@styles/globals.css';
import { Providers } from '@ui/common/common';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: 'Educational platform',
  description: 'Educational platform for students',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await auth();

  console.log('session', session);

  return (
    <html lang="en" className={`${rubik.variable} light`}>
      <body>
        <main className="flex  h-lvh flex-col items-center justify-center">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}

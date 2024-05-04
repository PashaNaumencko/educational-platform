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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={`${rubik.variable} light`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

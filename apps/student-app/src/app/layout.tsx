import '@styles/globals.css';
import { Providers } from '@ui/common/common';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
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
    <html lang="en" className={`${inter.variable} ${lexend.variable} light`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['400', '500', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JM aislamientos y revestimientos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} h-screen`}>{children}</body>
    </html>
  );
}

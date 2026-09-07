import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const roboto = Roboto({ weight: ['400', '500', '900'], subsets: ['latin'] });
const siteUrl = 'https://www.jmaislamientosyrevestimientos.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'JM Aislamientos y Revestimientos',
    template: '%s | JM Aislamientos y Revestimientos',
  },
  description:
    'Empresa de aislamientos, pladur, revestimientos interiores y techos registrables en Madrid con más de 25 años de experiencia.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JM Aislamientos y Revestimientos',
    description:
      'Especialistas en aislamientos, pladur, revestimientos interiores y techos registrables en Madrid.',
    url: siteUrl,
    siteName: 'JM Aislamientos y Revestimientos',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/images/workers.png',
        width: 1200,
        height: 630,
        alt: 'Equipo de JM Aislamientos y Revestimientos trabajando',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JM Aislamientos y Revestimientos',
    description:
      'Especialistas en aislamientos, pladur, revestimientos interiores y techos registrables en Madrid.',
    images: ['/images/workers.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={`${roboto.className} h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

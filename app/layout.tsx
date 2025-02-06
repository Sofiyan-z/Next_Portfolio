import type { Metadata } from 'next';
import { Zilla_Slab } from 'next/font/google';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { cn } from '@/lib/utils';

const ZillaFont = Zilla_Slab({
  weight: ['300', '400', '500', '600', '700'], // Liste des poids
  style: ['normal', 'italic'], // Liste des styles
  subsets: ['latin'], // Liste des subsets
  variable: '--font-caption', //
});

export const metadata: Metadata = {
  title: 'Sofiane Ziri > Front-end developer',
  description:
    'I am a web developer passionate about creating dynamic and engaging web applications. I love working with JavaScript and React.js to build innovative and user-friendly solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          GeistSans.variable,
          ZillaFont,
          'font-sans h-full bg-background text-foreground'
        )}
      >
        {children}
      </body>
    </html>
  );
}

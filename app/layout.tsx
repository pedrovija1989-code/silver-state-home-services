import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Silver State Home Services | Las Vegas',
  description: 'Professional plumbing, HVAC and electrical services for homeowners throughout the Las Vegas Valley.',
  openGraph: {
    title: 'Silver State Home Services | Las Vegas',
    description: 'Your home runs better with the right team.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Silver State Home Services cutaway house' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silver State Home Services | Las Vegas',
    description: 'Your home runs better with the right team.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

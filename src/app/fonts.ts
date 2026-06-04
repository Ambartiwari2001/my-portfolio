// fonts.ts
import { Space_Grotesk } from 'next/font/google';

export const textFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap'
});

export const titleFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap'
});

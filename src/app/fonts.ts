// fonts.ts
import { Inter, Pacifico } from 'next/font/google';

export const textFont = Inter({
  subsets: ['latin'],
  weight: ['300','400','500','700'],
  display: 'swap'
});

export const titleFont = Inter({      
  subsets: ['latin'],
  weight: ['600','700'],
  display: 'swap'
});

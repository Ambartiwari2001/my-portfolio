import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    dir: 'ltr',
    scope: '/',
    lang: 'en-US',
    start_url: '/',
    name: 'Ambar Tiwari',
    short_name: 'Ambar',
    description: 'Ambar Tiwari — Laravel Developer & Software Engineer Portfolio.',
    display: 'standalone',
    display_override: ['fullscreen', 'minimal-ui'],
    orientation: 'portrait-primary',
    theme_color: '#000000',
    background_color: '#ffffff',
    categories: ['portfolio', 'developer', 'software', 'web', 'laravel'],

    icons: [
      {
        src: '/images/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/images/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png'
      },
      {
        src: '/images/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/images/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/images/icons/maskable-icon-180.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],

    screenshots: [
      {
        src: '/images/screenshot-01.png',
        sizes: '540x720',
        type: 'image/png',
        form_factor: 'narrow'
      },
      {
        src: '/images/screenshot-02.png',
        sizes: '720x540',
        type: 'image/png',
        form_factor: 'wide'
      }
    ]
  };
}

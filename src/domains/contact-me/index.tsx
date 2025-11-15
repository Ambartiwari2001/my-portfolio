'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Link from 'next/link';
import { clsx } from 'clsx';

import { ContentContainer } from '@/layout/components/content-container';
import { sendGTMEvent } from '@next/third-parties/google';
import { ContactForm } from './components/contact-form';
import { ENV, GTM_EVENTS } from '@/shared/constants';
import { animator } from '@/shared/helpers';
import { CONTACT_ME_DATA } from '@/data';

const GOOGLE_RECAPTCHA_ELEMENT_ID = 'g-recaptcha-container';

export function ContactMePage() {
  return (
    <ContentContainer title="Contact Me" className="z-40">
      <div className="flex gap-5 max-lg:flex-wrap">
        {/* Left side - About text */}
        <div className={clsx('w-full text-xl leading-7', animator({ name: 'fadeIn' }))}>
          <p
            className={animator({ name: 'fadeInUp' })}
            style={{ animationDelay: '0.3s' }}
          >
            Hey there! I'm <strong>Ambar Tiwari</strong> — a passionate and curious Software Developer from India. 
            I love crafting clean, efficient, and user-friendly digital experiences using modern technologies. 
            Whether you’re looking to collaborate on a creative idea, need help building a web solution, 
            or just want to connect and talk about tech — I’d be happy to hear from you! 
            Let’s create something impactful together 🚀
          </p>
        </div>

        {/* Right side - Contact Links */}
        <div
          className={clsx(
            'text-md flex select-none flex-col gap-3 bg-transparent',
            animator({ name: 'fadeIn' })
          )}
        >
          {CONTACT_ME_DATA.contacts.map(({ type, value, link }, index) => (
            <div
              key={type}
              className={clsx('flex items-center gap-2', animator({ name: 'fadeInUp' }))}
              style={{ animationDelay: `${(index + 1) * 0.3}s` }}
            >
              <span className="font-medium">{type}:</span>
              {link ? (
                <Link
                  href={link}
                  target="_blank"
                  onClick={() => sendGTMEvent(GTM_EVENTS.CONTACT_LINK(type))}
                  className="text-md whitespace-nowrap text-amber-500"
                >
                  {value}
                </Link>
              ) : (
                <span>{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      {/* <GoogleReCaptchaProvider
        scriptProps={{ async: true, defer: true }}
        reCaptchaKey={ENV.GOOGLE_RECAPTCHA_SITE_KEY}
        container={{
          element: GOOGLE_RECAPTCHA_ELEMENT_ID,
          parameters: { badge: 'bottomright' }
        }}
      >
        <div id={GOOGLE_RECAPTCHA_ELEMENT_ID} />
        
      </GoogleReCaptchaProvider> */}
      <ContactForm />
    </ContentContainer>
  );
}

import Script from 'next/script';
import AboutClient from './AboutClient';
import { createPageMetadata, SITE_URL } from '../seo';

export const metadata = createPageMetadata({
  title: 'About Wasim Akram - Founder & CEO of Wisemen Soft',
  description:
    'Wasim Akram is the Founder and CEO of Wisemen Soft, a Pakistan-based software consultancy and development studio building custom web apps, ERP systems, HR tools, and workflow software for global teams.',
  path: '/about',
  keywords: [
    'Wasim Akram',
    'Wasim Akram founder',
    'Wasim Akram CEO',
    'Wasim Akram Wisemen Soft',
    'Wasim Akram software engineer',
    'about Wisemen Soft',
  ],
});

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Wasim Akram',
  jobTitle: 'Founder & CEO',
  url: 'https://www.wasimakram.org',
  worksFor: {
    '@type': 'Organization',
    name: 'Wisemen Soft',
    url: SITE_URL,
  },
  sameAs: [
    'https://www.wasimakram.org',
    'https://github.com/wasimakram516',
  ],
  description:
    'Founder and CEO of Wisemen Soft. Builder of 60+ production software projects across Pakistan, the GCC region, and Europe, spanning education, HR, print operations, and real-time event platforms.',
  disambiguatingDescription:
    'Software engineer and founder of Wisemen Soft in Pakistan; not the Pakistani cricketer of the same name.',
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutClient />
    </>
  );
}

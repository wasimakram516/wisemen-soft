import Script from 'next/script';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Process from '@/components/sections/Process';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import CTA from '@/components/sections/CTA';
import Services from '@/components/sections/Services';
import Engagements from '@/components/sections/Engagements';
import FAQ, { faqSchema } from '@/components/sections/FAQ';
import UnderstandingSplit from '@/components/sections/UnderstandingSplit';

export default function Home() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <UnderstandingSplit />
      <Marquee />
      <Services />
      <Engagements />
      <Process />
      <FeaturedProducts />
      <FAQ />
      <CTA />
    </>
  );
}

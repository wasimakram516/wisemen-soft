import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Process from '@/components/sections/Process';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';
import Services from '@/components/sections/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Process />
      <FeaturedProducts />
      <CTA />
    </>
  );
}

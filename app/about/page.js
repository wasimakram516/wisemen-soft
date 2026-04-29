import AboutClient from './AboutClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'About Wisemen Soft - Pakistan-Based Software Studio',
  description:
    'Meet Wisemen Soft, a Pakistan-based software studio led by Wasim Akram. We build maintainable custom software, ERP systems, HR tools, and web apps for global teams.',
  path: '/about',
  keywords: ['about Wisemen Soft', 'Wasim Akram software engineer', 'software studio Pakistan'],
});

export default function AboutPage() {
  return <AboutClient />;
}

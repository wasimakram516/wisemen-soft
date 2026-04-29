import AboutClient from './AboutClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'About Wisemen Soft - Premium Business Software House',
  description:
    'Meet Wisemen Soft, a Pakistan-based software house building custom web apps, ERP systems, HR tools, dashboards, and workflow software for global teams.',
  path: '/about',
  keywords: ['about Wisemen Soft', 'Wasim Akram software engineer', 'software house Pakistan'],
});

export default function AboutPage() {
  return <AboutClient />;
}

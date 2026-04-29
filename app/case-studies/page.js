import CaseStudiesClient from './CaseStudiesClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Case Studies - ERP, HR, and Print Software by Wisemen Soft',
  description:
    'Explore Wisemen Soft case studies across school ERP, print management, and HR software. See how we turn domain discovery into production-ready software.',
  path: '/case-studies',
  keywords: [
    'software case studies',
    'ERP case study',
    'HR software case study',
    'print management software',
  ],
});

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}

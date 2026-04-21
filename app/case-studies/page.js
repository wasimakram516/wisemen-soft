import CaseStudiesClient from './CaseStudiesClient';

export const metadata = {
  title: 'Case Studies — Wisemen Soft',
  description: 'Real problems we understood before writing a line of code. See how Nexus, PressMaster, and StaffSync came to life.',
  openGraph: {
    title: 'Case Studies — Wisemen Soft',
    description: 'Problems we understood. Products we shipped.',
    url: 'https://wisemensoft.com/case-studies',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}

import ContactClient from './ContactClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Contact Wisemen Soft - Start a Software Project',
  description:
    'Contact Wisemen Soft to discuss a custom software, ERP, HR, web app, or workflow automation project. Based in Pakistan and working with global teams.',
  path: '/contact',
  keywords: ['hire software house Pakistan', 'custom software consultation', 'start software project'],
});

export default function ContactPage() {
  return <ContactClient />;
}

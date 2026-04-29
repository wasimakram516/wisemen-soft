import ContactClient from './ContactClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Contact Wisemen Soft - Build Custom Business Software',
  description:
    'Contact Wisemen Soft to discuss a custom software, ERP, HR, web app, dashboard, or workflow automation project. Based in Pakistan and working globally.',
  path: '/contact',
  keywords: ['hire software house Pakistan', 'custom software consultation', 'business software project'],
});

export default function ContactPage() {
  return <ContactClient />;
}

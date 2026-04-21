import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact — Wisemen Soft',
  description: 'Tell us what you\'re building. We\'ll ask the right questions and give you a clear picture of what working together looks like.',
  openGraph: {
    title: 'Contact — Wisemen Soft',
    description: 'Start a project with Wisemen Soft.',
    url: 'https://wisemensoft.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

import { Container, Typography } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import ThemeSection from '@/components/ThemeSection';
import { Reveal } from '@/components/motion/Reveal';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'Privacy Policy — Wisemen Soft',
  description: 'Privacy Policy for Wisemen Soft and its products including Nexus, PressMaster, and StaffSync.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <ThemeSection mode="light" as="div" sx={{ minHeight: '100vh' }}>
      <PageBanner
        eyebrow="Legal"
        titleLight="Privacy"
        titleBold="Policy"
      >
        <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 2 }}>Last updated: May 2026</Typography>
      </PageBanner>

      <Container maxWidth="md" sx={{ py: { xs: 9, md: 12 } }}>
        {[
          {
            heading: 'Information We Collect',
            body: 'Wisemen Soft and its products (Nexus, PressMaster, StaffSync) collect information you provide directly — such as name, email address, institution name, and usage data — when you use our services, contact us, or register for a demo.',
          },
          {
            heading: 'How We Use Your Information',
            body: 'We use collected information to provide, maintain, and improve our products; respond to your inquiries; send product updates and service notifications; and analyse usage to improve user experience. We do not sell your personal data to third parties.',
          },
          {
            heading: 'Data Storage and Security',
            body: 'Your data is stored on secure servers with industry-standard encryption in transit (TLS 1.2+) and at rest. Passwords are hashed and never stored in plain text. Access to production data is strictly limited to authorised personnel.',
          },
          {
            heading: 'Institution Data (Nexus)',
            body: 'Data entered into Nexus by your institution — student records, staff details, financial records — is owned by your institution. We process it solely to provide the service. Each institution\'s data is fully isolated at the database level.',
          },
          {
            heading: 'Cookies',
            body: 'Our marketing website uses minimal cookies for analytics and session management. No advertising or tracking cookies are used. You can disable cookies in your browser settings without affecting core functionality.',
          },
          {
            heading: 'Your Rights',
            body: 'You may request access to, correction of, or deletion of your personal data at any time. Institutions using Nexus may export their full dataset. Contact us at the email below to exercise these rights.',
          },
          {
            heading: 'Contact',
            body: 'For privacy-related enquiries, contact us at wasimakram4245@gmail.com. We will respond within 5 business days.',
          },
        ].map(({ heading, body }, index) => (
          <Reveal key={heading} delay={Math.min(index, 4) * 0.06} amount={0.3} sx={{ mb: 6 }}>
            <Typography variant="h5" color="text.primary" sx={{ fontWeight: 700, mb: 2 }}>{heading}</Typography>
            <Typography variant="body1" color="text.secondary">{body}</Typography>
          </Reveal>
        ))}
      </Container>
    </ThemeSection>
  );
}

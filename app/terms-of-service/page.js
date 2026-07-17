import { Container, Typography } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import ThemeSection from '@/components/ThemeSection';
import { Reveal } from '@/components/motion/Reveal';
import { createPageMetadata } from '@/app/seo';

export const metadata = createPageMetadata({
  title: 'Terms of Service — Wisemen Soft',
  description: 'Terms of Service for Wisemen Soft and its products including Nexus, PressMaster, and StaffSync.',
  path: '/terms-of-service',
});

export default function TermsOfServicePage() {
  return (
    <ThemeSection mode="light" as="div" sx={{ minHeight: '100vh' }}>
      <PageBanner
        eyebrow="Legal"
        titleLight="Terms of"
        titleBold="Service"
      >
        <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 2 }}>Last updated: May 2026</Typography>
      </PageBanner>

      <Container maxWidth="md" sx={{ py: { xs: 9, md: 12 } }}>
        {[
          {
            heading: 'Acceptance of Terms',
            body: 'By accessing or using any Wisemen Soft product or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.',
          },
          {
            heading: 'Use of Services',
            body: 'Our products are provided for legitimate business and institutional use. You agree not to use our services for unlawful purposes, to violate any third-party rights, or to attempt to gain unauthorised access to any system or data.',
          },
          {
            heading: 'Accounts and Access',
            body: 'You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorised use of your account. Wisemen Soft is not liable for losses resulting from unauthorised access due to your failure to protect credentials.',
          },
          {
            heading: 'Intellectual Property',
            body: 'All software, design, and content produced by Wisemen Soft remains the intellectual property of Wisemen Soft or its licensors. Client-specific configurations and institution data remain the property of the respective client.',
          },
          {
            heading: 'Service Availability',
            body: 'We strive to maintain high availability of our hosted products. However, we do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance where possible. We are not liable for losses resulting from downtime.',
          },
          {
            heading: 'Limitation of Liability',
            body: 'To the maximum extent permitted by law, Wisemen Soft is not liable for indirect, incidental, or consequential damages arising from use of our products. Our total liability in any matter arising from these terms shall not exceed the fees paid in the preceding 12 months.',
          },
          {
            heading: 'Termination',
            body: 'Either party may terminate a service agreement with reasonable notice. Upon termination, you may request a full export of your data. We will retain your data for 30 days after termination before permanent deletion.',
          },
          {
            heading: 'Governing Law',
            body: 'These terms are governed by the laws of Pakistan. Any disputes shall be subject to the jurisdiction of the courts of Lahore, Pakistan.',
          },
          {
            heading: 'Contact',
            body: 'For questions about these terms, contact us at wasimakram4245@gmail.com.',
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

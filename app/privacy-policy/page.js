import { Box, Container, Typography } from '@mui/material';

export const metadata = {
  title: 'Privacy Policy — Wisemen Soft',
  description: 'Privacy Policy for Wisemen Soft and its products including Nexus, PressMaster, and StaffSync.',
};

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ background: '#0A0A0A', minHeight: '100vh', pt: { xs: 18, md: 22 }, pb: { xs: 12, md: 16 } }}>
      <Container maxWidth="md">
        <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 700, display: 'block', mb: 4 }}>
          Legal
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, color: '#F0EDE6', fontWeight: 100, mb: 2 }}>
          Privacy <Box component="span" sx={{ fontWeight: 800 }}>Policy</Box>
        </Typography>
        <Typography variant="caption" sx={{ color: '#6B6560', display: 'block', mb: 8 }}>Last updated: May 2026</Typography>

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
        ].map(({ heading, body }) => (
          <Box key={heading} sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ color: '#F0EDE6', fontWeight: 700, mb: 2 }}>{heading}</Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.9 }}>{body}</Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

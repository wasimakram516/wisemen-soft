import { Box, Container, Typography } from '@mui/material';

export const metadata = {
  title: 'Terms of Service — Wisemen Soft',
  description: 'Terms of Service for Wisemen Soft and its products including Nexus, PressMaster, and StaffSync.',
};

export default function TermsOfServicePage() {
  return (
    <Box sx={{ background: '#0A0A0A', minHeight: '100vh', pt: { xs: 18, md: 22 }, pb: { xs: 12, md: 16 } }}>
      <Container maxWidth="md">
        <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 700, display: 'block', mb: 4 }}>
          Legal
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, color: '#F0EDE6', fontWeight: 100, mb: 2 }}>
          Terms of <Box component="span" sx={{ fontWeight: 800 }}>Service</Box>
        </Typography>
        <Typography variant="caption" sx={{ color: '#6B6560', display: 'block', mb: 8 }}>Last updated: May 2026</Typography>

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

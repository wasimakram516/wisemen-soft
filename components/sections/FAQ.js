'use client';

import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { CaretDown as ExpandMoreIcon } from '@phosphor-icons/react';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';
import ThemeSection from '@/components/ThemeSection';

const faqs = [
  {
    question: 'What kind of software does Wisemen Soft build?',
    answer:
      'We build custom web applications, ERP systems, HR management software, print management systems, dashboards, internal tools, and workflow automation for businesses that need software shaped around their operations.',
  },
  {
    question: 'Where is Wisemen Soft based?',
    answer:
      'Wisemen Soft is based in Pakistan and works with clients in Pakistan, the GCC region, Europe, and other global markets.',
  },
  {
    question: 'Do you only build new products from scratch?',
    answer:
      'No. We can build from scratch, modernize an existing workflow, move a desktop process to the web, or create a focused internal system that replaces spreadsheets and manual tracking.',
  },
  {
    question: 'How does a project usually start?',
    answer:
      'We start with discovery: understanding your users, workflows, constraints, data, and success criteria. After that we define the scope, architecture, milestones, and delivery plan.',
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const theme = useTheme();

  return (
    <ThemeSection mode="dark" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stagger stagger={0.1}>
              <StaggerItem>
                <Typography variant="caption" color="primary.main" sx={{ letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', mb: 3 }}>
                  Common Questions
                </Typography>
              </StaggerItem>
              <StaggerItem>
                <Typography variant="h2" color="text.primary" sx={{ maxWidth: 360 }}>
                  Straight answers before the first call.
                </Typography>
              </StaggerItem>
            </Stagger>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Stagger delay={0.1} stagger={0.07}>
              {faqs.map((faq, index) => (
                <StaggerItem
                  key={faq.question}
                  component="details"
                  sx={{
                    borderTop: index === 0 ? 1 : 0,
                    borderBottom: 1,
                    borderColor: 'divider',
                    '& summary::-webkit-details-marker': { display: 'none' },
                    '& .faq-icon': { transition: 'transform 0.25s ease' },
                    '&[open] .faq-icon': { transform: 'rotate(180deg)' },
                    '&[open] .faq-question': { color: 'primary.main' },
                  }}
                >
                  <Box
                    component="summary"
                    sx={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3,
                      py: { xs: 3, md: 3.5 }, cursor: 'pointer', listStyle: 'none',
                      '&:hover .faq-question': { color: 'primary.main' },
                    }}
                  >
                    <Typography className="faq-question" color="text.primary" sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 500, transition: 'color 0.2s' }}>
                      {faq.question}
                    </Typography>
                    <ExpandMoreIcon className="faq-icon" size={20} weight="bold" color={theme.palette.primary.main} style={{ flexShrink: 0 }} />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 640, pb: 4 }}>
                    {faq.answer}
                  </Typography>
                </StaggerItem>
              ))}
            </Stagger>
          </Grid>
        </Grid>
      </Container>
    </ThemeSection>
  );
}

import { Box, Container, Grid, Typography } from '@mui/material';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

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
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        background: '#0A0A0A',
        borderTop: '1px solid rgba(212,168,67,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Reveal>
            <Typography
              variant="caption"
              sx={{ color: '#C16E5A', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', mb: 3 }}
            >
              Common Questions
            </Typography>
            <Typography variant="h2" sx={{ color: '#F0EDE6', fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 360 }}>
              Straight answers before the first call.
            </Typography>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Stagger>
            {faqs.map((faq, index) => (
              <StaggerItem
                key={faq.question}
                sx={{
                  py: { xs: 4, md: 5 },
                  borderTop: index === 0 ? '1px solid rgba(212,168,67,0.08)' : 'none',
                  borderBottom: '1px solid rgba(212,168,67,0.08)',
                  transition: 'border-color 0.22s ease, transform 0.22s ease',
                  '&:hover': {
                    borderBottomColor: 'rgba(212,168,67,0.22)',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Typography variant="h3" sx={{ color: '#F0EDE6', fontSize: { xs: '1.2rem', md: '1.4rem' }, mb: 1.5 }}>
                  {faq.question}
                </Typography>
                <Typography variant="body2" sx={{ color: '#A8A39D', lineHeight: 1.9 }}>
                  {faq.answer}
                </Typography>
              </StaggerItem>
            ))}
            </Stagger>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

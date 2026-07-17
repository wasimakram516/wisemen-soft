'use client';

import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { PaperPlaneTilt as SendIcon } from '@phosphor-icons/react';
import { ArrowSquareOut as OpenInNewIcon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import PageBanner from '@/components/PageBanner';
import ThemeSection from '@/components/ThemeSection';

const MotionBox = motion.create(Box);

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: `WisemenSoft Contact: ${form.subject}`,
          message: form.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeSection mode="light" as="div" sx={{ minHeight: '100vh' }}>
      <PageBanner
        eyebrow="Start a Project"
        titleTop="Tell us what you're"
        titleBottom="solving."
        description="Share the workflow, bottleneck, or system you want to improve. We'll ask the right questions and map the next practical step."
        maxWidth={560}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 9, md: 12 } }}>
        <Grid container spacing={{ xs: 8, md: 14 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <TextField label="Your Name" name="name" value={form.name} onChange={handleChange} required fullWidth />
                  </MotionBox>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}>
                    <TextField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required fullWidth />
                  </MotionBox>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}>
                    <TextField label="Subject" name="subject" value={form.subject} onChange={handleChange} required fullWidth />
                  </MotionBox>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.28 }}>
                    <TextField label="Your Message" name="message" value={form.message} onChange={handleChange} required fullWidth multiline rows={6} />
                  </MotionBox>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.34 }}>
                    {status === 'success' && (
                      <Alert severity="success" sx={{ mb: 2 }}>
                        Message sent. We will be in touch within 24 hours.
                      </Alert>
                    )}
                    {status === 'error' && (
                      <Alert severity="error" sx={{ mb: 2 }}>
                        Something went wrong. Email us directly at wasimakram4245@gmail.com
                      </Alert>
                    )}
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      endIcon={loading ? <CircularProgress size={16} color="inherit" /> : <SendIcon size="1em" weight="bold" />}
                      sx={{ px: 5 }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </MotionBox>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.18 }} sx={{ mb: 8 }}>
              <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                Email
              </Typography>
              <Typography
                component="a"
                href="mailto:wasimakram4245@gmail.com"
                variant="body1"
                color="text.primary"
                sx={{ wordBreak: 'break-word', '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}
              >
                wasimakram4245@gmail.com
              </Typography>
            </MotionBox>

            <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.26 }} sx={{ mb: 8 }}>
              <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                Based In
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Pakistan. Available for GCC, Europe, and global software projects.
              </Typography>
            </MotionBox>

            <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.34 }} sx={{ mb: 8 }}>
              <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                Founder
              </Typography>
              <Button
                variant="outlined"
                href="https://www.wasimakram.org"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon size={16} weight="bold" />}
              >
                Wasim Akram Portfolio
              </Button>
            </MotionBox>

            <MotionBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.42 }} sx={{ pt: 6, borderTop: 1, borderColor: 'divider' }}>
              <Typography variant="body2" color="text.disabled">
                We respond within 24 hours. For urgent inquiries, include that context in the subject line.
              </Typography>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </ThemeSection>
  );
}

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
import SendIcon from '@mui/icons-material/Send';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const inputSx = {
  '& .MuiOutlinedInput-root': {
    background: 'transparent',
    transition: 'transform 0.2s ease, background 0.2s ease',
    '& fieldset': { borderColor: 'rgba(212,168,67,0.15)' },
    '&:hover fieldset': { borderColor: 'rgba(212,168,67,0.35)' },
    '&.Mui-focused fieldset': { borderColor: '#D4A843' },
    '&.Mui-focused': { transform: 'translateY(-1px)', background: 'rgba(240,237,230,0.018)' },
  },
  '& .MuiInputLabel-root': { color: '#A8A39D' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#D4A843' },
  '& .MuiOutlinedInput-input': { color: '#F0EDE6' },
};

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
    <Box sx={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Box sx={{ pt: { xs: 18, md: 22 }, pb: { xs: 10, md: 14 }, borderBottom: '1px solid rgba(92,177,170,0.14)' }}>
        <Container maxWidth="lg">
          <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} sx={{ mb: 5 }}>
            
            <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: 700 }}>
              Start a Project
            </Typography>
          </MotionBox>
          <MotionBox initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.35rem', md: '3.5rem' }, color: '#F0EDE6', mb: 4, lineHeight: 1.02, maxWidth: 760 }}>
              <Box component="span" sx={{ fontWeight: 100 }}>Tell us what your business </Box>
              <Box component="span" sx={{ fontWeight: 800 }}>needs software to handle.</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', fontSize: '1.05rem', lineHeight: 1.9, maxWidth: 580 }}>
              Share the workflow, bottleneck, product idea, or system you want to improve. We will ask the right
              questions, be direct about fit, and map the next practical step.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 16 } }}>
        <Grid container spacing={{ xs: 8, md: 14 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox
              component="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Your Name" name="name" value={form.name} onChange={handleChange} required fullWidth sx={inputSx} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required fullWidth sx={inputSx} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField label="Subject" name="subject" value={form.subject} onChange={handleChange} required fullWidth sx={inputSx} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField label="Your Message" name="message" value={form.message} onChange={handleChange} required fullWidth multiline rows={6} sx={inputSx} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  {status === 'success' && (
                    <Alert severity="success" sx={{ mb: 2, background: 'rgba(109,184,126,0.08)', border: '1px solid rgba(109,184,126,0.2)', color: '#6DB87E' }}>
                      Message sent. We will be in touch within 24 hours.
                    </Alert>
                  )}
                  {status === 'error' && (
                    <Alert severity="error" sx={{ mb: 2, background: 'rgba(212,68,68,0.08)', border: '1px solid rgba(212,68,68,0.2)', color: '#E06060' }}>
                      Something went wrong. Email us directly at wasimakram4245@gmail.com
                    </Alert>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    endIcon={loading ? <CircularProgress size={16} sx={{ color: '#0A0A0A' }} /> : <SendIcon />}
                    sx={{ px: 5 }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
              <Box sx={{ mb: 8 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  Email
                </Typography>
                <Typography
                  component="a"
                  href="mailto:wasimakram4245@gmail.com"
                  variant="body1"
                  sx={{ color: '#F0EDE6', wordBreak: 'break-word', '&:hover': { color: '#D4A843' }, transition: 'color 0.2s' }}
                >
                  wasimakram4245@gmail.com
                </Typography>
              </Box>

              <Box sx={{ mb: 8 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  Based In
                </Typography>
                <Typography variant="body1" sx={{ color: '#A8A39D', lineHeight: 1.8 }}>
                  Pakistan. Available for GCC, Europe, and global software projects.
                </Typography>
              </Box>

              <Box sx={{ mb: 8 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  Founder
                </Typography>
                <Button
                  variant="outlined"
                  href="https://www.wasimakram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewIcon fontSize="small" />}
                >
                  Wasim Akram Portfolio
                </Button>
              </Box>

              <Box sx={{ pt: 6, borderTop: '1px solid rgba(212,168,67,0.08)' }}>
                <Typography variant="body2" sx={{ color: '#6B6560', lineHeight: 1.9 }}>
                  We respond within 24 hours. For urgent inquiries, include that context in the subject line.
                </Typography>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

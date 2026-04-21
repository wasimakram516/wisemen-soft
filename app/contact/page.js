'use client';

import { useState } from 'react';
import {
  Box, Container, Typography, Grid,
  TextField, Button, Alert, CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MotionBox = motion.create(Box);

const socials = [
  { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
  { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
  { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
];

const inputSx = {
  '& .MuiOutlinedInput-root': {
    background: 'transparent',
    '& fieldset': { borderColor: 'rgba(212,168,67,0.15)' },
    '&:hover fieldset': { borderColor: 'rgba(212,168,67,0.35)' },
    '&.Mui-focused fieldset': { borderColor: '#D4A843' },
  },
  '& .MuiInputLabel-root': { color: '#A8A39D' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#D4A843' },
  '& .MuiOutlinedInput-input': { color: '#F0EDE6' },
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
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
      const data = await res.json();
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
      <Box sx={{ pt: { xs: 18, md: 22 }, pb: { xs: 10, md: 14 }, borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}
          >
            <Box sx={{ width: 28, height: 1, background: '#D4A843' }} />
            <Typography variant="caption" sx={{ color: '#D4A843', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
              Let&apos;s Talk
            </Typography>
          </MotionBox>
          <MotionBox initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3.4rem' }, color: '#F0EDE6', mb: 4, lineHeight: 1.0, maxWidth: 700 }}>
              Tell us what you&apos;re building.
            </Typography>
            <Typography variant="body1" sx={{ color: '#A8A39D', fontSize: '1.05rem', lineHeight: 1.9, maxWidth: 480 }}>
              We&apos;ll ask the right questions, be honest about fit, and give you a clear picture of what working together looks like.
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
                      Message sent. We&apos;ll be in touch within 24 hours.
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
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Box sx={{ mb: 8 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  Email
                </Typography>
                <Typography
                  component="a"
                  href="mailto:wasimakram4245@gmail.com"
                  variant="body1"
                  sx={{ color: '#F0EDE6', '&:hover': { color: '#D4A843' }, transition: 'color 0.2s' }}
                >
                  wasimakram4245@gmail.com
                </Typography>
              </Box>

              <Box sx={{ mb: 8 }}>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  Based In
                </Typography>
                <Typography variant="body1" sx={{ color: '#A8A39D' }}>
                  Pakistan · Available for GCC & global projects
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption" sx={{ color: '#6B6560', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3, display: 'block' }}>
                  Follow
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  {socials.map((s) => (
                    <Box
                      key={s.label}
                      component="a"
                      href={s.href}
                      aria-label={s.label}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 42,
                        height: 42,
                        color: '#A8A39D',
                        border: '1px solid rgba(212,168,67,0.12)',
                        borderRadius: 1.5,
                        '&:hover': { color: '#D4A843', borderColor: 'rgba(212,168,67,0.4)', background: 'rgba(212,168,67,0.04)' },
                        transition: 'all 0.2s',
                      }}
                    >
                      {s.icon}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 8, pt: 6, borderTop: '1px solid rgba(212,168,67,0.08)' }}>
                <Typography variant="body2" sx={{ color: '#6B6560', lineHeight: 1.9 }}>
                  We respond within 24 hours. For urgent inquiries, mention it in the subject line.
                </Typography>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

import React, { useState } from 'react';
// import type { ElementType } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Container, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import SendIcon from '@mui/icons-material/Send';
// import contactImage from '/projects/contact-me.png'; // Use a placeholder or your own image


const SERVICE_ID = 'service_ukh7x59';
const TEMPLATE_ID = 'template_h61vzja';
const USER_ID = 'taHa1a5zIOU7I1fYv';

const initialForm = { name: '', email: '', subject: '', message: '' };

const validateField = (name: string, value: string) => {
  switch (name) {
    case 'name':
      return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
    case 'email':
      return !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email' : '';
    case 'subject':
      return value.trim().length < 3 ? 'Subject must be at least 3 characters' : '';
    case 'message':
      return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
    default:
      return '';
  }
};

const ContactUs: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (hasSubmitted) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    const newErrors: { [key: string]: string } = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key as keyof typeof form]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setStatus('loading');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: 'Anehan',
          from_name: form.name,
          message: form.message,
          reply_to: form.email,
          subject: form.subject,
        },
        USER_ID
      );
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <Box id="contact" sx={{ minHeight: '100vh', py: 10, background: 'linear-gradient(135deg, #232526 0%, #0f2027 100%)' }}>
      <Container maxWidth="md">
        <Box sx={{ 
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 4, 
          p: { xs: 3, md: 5 }, 
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          maxWidth: '800px',
          mx: 'auto'
        }}>
          <Typography 
            variant="h3" 
            fontWeight={700} 
            mb={4} 
            color="#00C47C" 
            textAlign="center"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Let's Connect
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              margin="normal"
              variant="outlined"
              InputLabelProps={{ style: { color: '#00C47C' } }}
              InputProps={{ 
                style: { color: '#fff' },
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00C47C',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00C47C',
                  },
                }
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              variant="outlined"
              InputLabelProps={{ style: { color: '#00C47C' } }}
              InputProps={{ 
                style: { color: '#fff' },
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00C47C',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00C47C',
                  },
                }
              }}
            />
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
              margin="normal"
              variant="outlined"
              InputLabelProps={{ style: { color: '#00C47C' } }}
              InputProps={{ 
                style: { color: '#fff' },
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00C47C',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00C47C',
                  },
                }
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              margin="normal"
              variant="outlined"
              multiline
              minRows={5}
              InputLabelProps={{ style: { color: '#00C47C' } }}
              InputProps={{ 
                style: { color: '#fff' },
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00C47C',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#00C47C',
                  },
                }
              }}
            />
            <Box mt={4}>
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                sx={{ 
                  backgroundColor: '#00C47C',
                  color: '#fff',
                  fontWeight: 600,
                  py: 1.5,
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 20px rgba(0, 196, 124, 0.2)',
                  '&:hover': {
                    backgroundColor: '#00a366',
                    boxShadow: '0 6px 24px rgba(0, 196, 124, 0.3)',
                  }
                }}
                disabled={status === 'loading'}
                startIcon={status === 'loading' ? <CircularProgress size={22} color="inherit" /> : <SendIcon />}
              >
                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : status === 'error'
                  ? 'Error Sending'
                  : 'Send Message'}
              </Button>
            </Box>
            {status === 'success' && (
              <Alert 
                icon={<CheckCircleIcon />} 
                severity="success" 
                sx={{ 
                  mt: 3,
                  backgroundColor: 'rgba(0, 196, 124, 0.1)',
                  color: '#00C47C',
                  border: '1px solid rgba(0, 196, 124, 0.2)',
                  '& .MuiAlert-icon': {
                    color: '#00C47C'
                  }
                }}
              >
                Message sent successfully!
              </Alert>
            )}
            {status === 'error' && (
              <Alert 
                icon={<ErrorIcon />} 
                severity="error" 
                sx={{ 
                  mt: 3,
                  backgroundColor: 'rgba(255, 0, 0, 0.1)',
                  color: '#ff4444',
                  border: '1px solid rgba(255, 0, 0, 0.2)',
                  '& .MuiAlert-icon': {
                    color: '#ff4444'
                  }
                }}
              >
                Error sending message. Please try again.
              </Alert>
            )}
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs; 
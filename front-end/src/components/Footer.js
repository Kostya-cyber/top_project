import React from 'react';
import { CssBaseline, Box, Typography, Container } from '@mui/material';

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#1976d2'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" color="white">
            &copy; 2022 Cookbook
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
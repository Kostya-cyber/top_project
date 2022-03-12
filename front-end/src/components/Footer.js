import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export default () => {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; 2022 Cookbook
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    );
}
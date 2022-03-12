import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default () => {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ mt: 10 }}>
        <Typography variant="h1" component="h1" color="primary" sx={{ fontWeight: 500 }}>
          404
        </Typography>
        <Typography variant="h4" component="h4" color="#808080">
          Uh oh! Looks like something broke.
        </Typography>
        <Button variant="contained" href="/" sx={{ mt: 2 }}>
          Go to home
        </Button>
      </Box>
    );
}
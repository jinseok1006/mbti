import { Typography, Box } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        bottom: 0,
        py: 2,
        bgcolor: '#dee2e6',
      }}
    >
      <Typography textAlign="center" variant="body2">
        powered by react, vite
      </Typography>
      <Typography textAlign="center" variant="body2">
        css by material design 2
      </Typography>
    </Box>
  );
}
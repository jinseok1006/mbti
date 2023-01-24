import { Stack, Typography, Button, Box } from '@mui/material';
import { useHandleUrl } from './index';

export default function Start() {
  const handleUrl = useHandleUrl();

  return (
    <Stack sx={{ pt: 10, flex: '1 0 0', justifyContent: 'space-between' }}>
      <Typography component="h2" variant="h3" textAlign="center">
        MBTI 검사
      </Typography>
      <Box sx={{ pt: 10, px: 10 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{ height: '50px', fontSize: '1.5rem' }}
          onClick={() => handleUrl('question')}
        >
          검사 시작하기
        </Button>
      </Box>
    </Stack>
  );
}

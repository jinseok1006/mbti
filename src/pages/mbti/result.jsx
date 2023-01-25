import { Box, Button } from '@mui/material';
import UrlButton from '@/components/urlButton';

export default function Result() {
  return (
    <Box>
      결과입니둥
      <UrlButton variant="contained" color="secondary" url="start">
        start로 돌아가기
      </UrlButton>
    </Box>
  );
}

import { Box, Button, Typography, Link } from '@mui/material';
import UrlButton from '@/components/urlButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Result() {
  return (
    <Box mt={5}>
      <Box mb={5}>
        <Typography variant="h5" textAlign="center">
          당신의 MBTI는....
        </Typography>
        <Link onClick={() => alert('잠이나자라')}>
          <Typography variant="h6" textAlign="center">
            ESTJ
          </Typography>
        </Link>
      </Box>
      <UrlButton variant="contained" color="secondary" url="start">
        start로 돌아가기
      </UrlButton>
    </Box>
  );
}

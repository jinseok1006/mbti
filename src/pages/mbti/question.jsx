import { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Typography,
  Radio,
  RadioGroup,
} from '@mui/material';

import { useHandleUrl } from '.';

// export default function test() {

// }

export default function Question() {
  const handleUrl = useHandleUrl();

  const options = [
    '매우 그렇다',
    '그렇다',
    '보통이다',
    '아니다',
    '매우 아니다',
  ];

  const [value, setValue] = useState(null);
  const onChange = (e) => setValue(e.target.value);
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" textAlign="center" sx={{ pb: 5 }}>
        나는 혼자있기를 좋아한다.
      </Typography>

      <Box sx={{ width: '15rem', m: 'auto' }}>
        {options.map((option, i) => (
          <Button key={i} variant="contained" fullWidth sx={{ mt: 2 }}>
            {option}
          </Button>
        ))}
      </Box>
      <Box sx={{ mt: 3, pt: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleUrl('start')}
        >
          start로 돌아가기
        </Button>
      </Box>
    </Box>
  );
}

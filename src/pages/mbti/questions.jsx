import { Box, Typography, Button } from '@mui/material';
import { questionsString } from './test';
const options = ['매우 아니다', '아니다', '보통이다', '그렇다', '매우 그렇다'];

export default function Questions({ number, onAnswer }) {
  return <Question number={number} onAnswer={onAnswer} />;
}

function Question({ number, onAnswer }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" textAlign="center" sx={{ pb: 5 }}>
        {questionsString[number]}
      </Typography>

      <Box sx={{ width: '15rem', m: 'auto' }}>
        {options.map((option, i) => (
          <Button
            key={i}
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            name={number}
            value={i}
            onClick={onAnswer}
          >
            {option}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

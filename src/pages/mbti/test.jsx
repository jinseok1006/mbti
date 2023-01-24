import { useEffect, useState } from 'react';
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

const options = ['매우 아니다', '아니다', '보통이다', '그렇다', '매우 그렇다'];

const questions = [
  '나는 혼자있기를 좋아한다.',
  '주기적으로 새로운 친구를 만든다.',
  '자유 시간 중 상당 부분을 다양한 관심사를 탐구하는 데 할애한다.',
];

export default function Test() {
  const handleUrl = useHandleUrl();

  const [number, setNumber] = useState(0);

  const onNext = () => {
    if (number < questions.length - 1) {
      setNumber(number + 1);
    } else {
      handleUrl('result');
    }
  };

  const onPrev = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const [answers, setAnswers] = useState(
    Array.from({ length: questions.length }, (_, i) => null)
  );

  const onAnswer = (e) => {
    const { name, value } = e.target;

    setAnswers(
      answers.map((answer, index) =>
        index === parseInt(name) ? value : answer
      )
    );

    onNext();
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <Box>
      <Question number={number} onAnswer={onAnswer} />
      <Box sx={{ mt: 3, pt: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleUrl('start')}
        >
          start로 돌아가기
        </Button>
        <Button onClick={onPrev} variant="contained">
          이전 문항으로 돌아가기
        </Button>
      </Box>
    </Box>
  );
}

function Question({ number, onAnswer }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" textAlign="center" sx={{ pb: 5 }}>
        {questions[number]}
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

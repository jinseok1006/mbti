import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  LinearProgress,
  Fade,
  CircularProgress,
} from '@mui/material';

import UrlButton from '@/components/urlButton';

import Questions from './questions';

export const questionsString = [
  '혼자있기를 좋아한다.',
  '주기적으로 새로운 친구를 만든다.',
  '자유 시간 중 상당 부분을 다양한 관심사를 탐구하는 데 할애한다.',
  '다른 사람이 울고 있는 모습을 보면 자신도 울고 싶어질 때가 많다.',
  '일이 잘못될 때를 대비해 여러 대비책을 세우는 편이다.',
  '압박감이 심한 환경에서도 평정심을 유지하는 편이다.',
  '파티나 행사에서 새로운 사람에게 먼저 자신을 소개하기보다는 주로 이미 알고 있는 사람과 대화하는 편이다.',
];

export default function Test() {
  const [number, setNumber] = useState(0);

  const [answers, setAnswers] = useState(
    Array.from({ length: questionsString.length }, (_, i) => null)
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

  const onNext = () => {
    if (number < questionsString.length) {
      setNumber(number + 1);
    }
  };
  const onPrev = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <Box>
      <Box sx={{ mt: 3, width: '360px', mx: 'auto' }}>
        <LinearProgress
          variant="determinate"
          value={(number / questionsString.length) * 100}
        />
      </Box>

      {number !== questionsString.length ? (
        <Questions number={number} onAnswer={onAnswer} />
      ) : (
        <Wait />
      )}

      <Box sx={{ mt: 3, pt: 3 }}>
        <UrlButton variant="contained" color="secondary" url="start">
          start로 돌아가기
        </UrlButton>
        <Button onClick={onPrev} variant="contained">
          이전 문항으로 돌아가기
        </Button>
      </Box>
    </Box>
  );
}

function Wait() {
  const [wait, setWait] = useState(true);

  // 만약 ssr인경우..
  useEffect(() => {
    setTimeout(() => setWait(false), 1500);
  }, []);

  return (
    <Box mt={5}>
      <Typography variant="h5" textAlign="center">
        잠시만 기다려주세요...
      </Typography>
      <Box mt={2} display="flex" justifyContent="center">
        {wait ? (
          <CircularProgress />
        ) : (
          <UrlButton url="result" variant="contained">
            결과 확인하기
          </UrlButton>
        )}
      </Box>
    </Box>
  );
}
